import { makeAutoObservable, runInAction } from "mobx";
import { getMovies } from "../api/movies";
import type { Movie } from "../api/type";
// import { MoviesMock } from "../mocks/MoviesMocks";

class MoviesStore {
  movies: Movie[] = [];
  currentPage: number = 1;
  isLoading: boolean = false;
  error: string | null = null;

  selectedGenres: string[] = [];
  ratingRange: [number, number] = [0, 10];
  yearRange: [number, number] = [1990, new Date().getFullYear()];

  constructor() {
    makeAutoObservable(this);
  }

  getMoviesAction = async () => {
    this.isLoading = true;
    try {
      const res = await getMovies(this.currentPage);
      //const res = MoviesMock;

      runInAction(() => {
        if (res?.docs) {
          this.movies = [...this.movies, ...res.docs];
          this.currentPage += 1;
        }
      });
    } catch (error) {
      console.error("Ошибка при получении фильмов:", error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  get filteredMovies() {
    if (this.selectedGenres.length === 0) {
      return this.movies;
    }
    return this.movies.filter((movie) =>
      movie.genres.some((genre) => this.selectedGenres.includes(genre.name))
    );
  }

  get genresList(): string[] {
    const allGenres = this.movies
      .map((movie) => movie.genres.map((genre) => genre.name))
      .flat();

    return Array.from(new Set(allGenres)).sort();
  }
}

export default new MoviesStore();
