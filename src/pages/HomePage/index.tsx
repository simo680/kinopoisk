import { observer } from "mobx-react-lite";
import { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { MovieItem } from "../../components/MovieItem";
import MoviesStore from "../../store/MoviesStore";

import style from "./HomePage.module.scss";

export const HomePage = observer(() => {
  const { movies, getMoviesAction, isLoading } = MoviesStore;

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
      <div className={style.list}>
        {movies.map((movie) => (
          <div key={movie.id} className={style.itemWrapper}>
            <Link to={`/movie/${movie.id}`}>
              <MovieItem movie={movie} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
});
