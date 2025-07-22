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
  ratingRange: [number, number] = [1, 10];
  yearRange: [number, number] = [1990, new Date().getFullYear()];

  constructor() {
    makeAutoObservable(this);
  }

  getMoviesAction = async (
    page: number = this.currentPage,
    genres: string[] = this.selectedGenres,
    rating: [number, number] = this.ratingRange,
    years: [number, number] = this.yearRange
  ) => {
    this.isLoading = true;
    try {
      const res = await getMovies(page, 50, genres, rating, years);

      runInAction(() => {
        if (res?.docs) {
          if (page === 1) {
            this.movies = res.docs;
          } else {
            this.movies = [...this.movies, ...res.docs];
          }
          this.currentPage = page + 1;
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

  setYearRange = (range: [number, number]) => {
    this.yearRange = range;
    this.currentPage = 1;
    this.getMoviesAction(1, this.selectedGenres, this.ratingRange, range);
  };
}

export default new MoviesStore();
