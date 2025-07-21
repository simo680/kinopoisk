import { observer } from "mobx-react-lite";
import { useCallback, useEffect } from "react";
import { MovieItem } from "../../components/MovieItem";
import MoviesStore from "../../store/MoviesStore";

import style from "./HomePage.module.scss";
import { Filter } from "../../components/Fliter";

export const HomePage = observer(() => {
  const { filteredMovies, getMoviesAction, isLoading } = MoviesStore;

  const Movies = Array.from(
    new Map(filteredMovies.map((movie) => [movie.id, movie])).values()
  );

  useEffect(() => {
    getMoviesAction();
  }, []);

  const scrollHandler = useCallback(() => {
    const scrollPosition =
      window.innerHeight + document.documentElement.scrollTop;
    const threshold = document.documentElement.offsetHeight - 100;

    if (scrollPosition >= threshold && !isLoading) {
      getMoviesAction();
    }
  }, [isLoading, getMoviesAction]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrollHandler]);

  return (
    <div className={style.container}>
      <Filter />
      <div className={style.list}>
        {Movies.map((movie) => (
          <div key={movie.id}>
            <MovieItem movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
});
