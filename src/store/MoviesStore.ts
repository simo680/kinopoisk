import { makeAutoObservable, runInAction } from "mobx";
// import { getMovies } from "../api/movies";
import type { Movie } from "../api/type";
import { MoviesMock } from "../mocks/MoviesMocks";

class MoviesStore {
  movies: Movie[] = [];
  currentPage: number = 1;
  isLoading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  getMoviesAction = async () => {
    try {
      this.isLoading = true;
      // const res = await getMovies(this.currentPage);
      const res = MoviesMock

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
}

export default new MoviesStore();
