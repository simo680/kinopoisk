import { observer } from "mobx-react-lite";
import { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { MovieItem } from "../../components/MovieItem";
import MoviesStore from "../../store/MoviesStore";

import style from "./HomePage.module.scss";

export const HomePage = observer(() => {
  const { movies, getMoviesAction } = MoviesStore;

  useEffect(() => {
    getMoviesAction();
  }, []);

  const scrollHandler = useCallback(() => {
    const scrollPosition =
      window.innerHeight + document.documentElement.scrollTop;

    const threshold = document.documentElement.offsetHeight - 100;

    if (scrollPosition >= threshold) {
      getMoviesAction();
    }
  }, [getMoviesAction]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <div className={style.container}>
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <MovieItem movie={movie} />
        </Link>
      ))}
    </div>
  );
});
