import { useEffect, useState, useCallback } from "react";
import type { Movie } from "../../api/type";
import { getMovies } from "../../api/movies";
import { MovieItem } from "../../components/MovieItem";

import style from "./HomePage.module.scss";

export const HomePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(false);

  const fetchMovies = useCallback(async () => {
    setFetching(true);

    const data = await getMovies(currentPage);

    if (data?.docs) {
      setMovies((prev) => [...prev, ...data.docs]);
      setCurrentPage((prev) => prev + 1);
    }

    setFetching(false);
  }, [currentPage]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const scrollHandler = useCallback(() => {
    const scrollPosition =
      window.innerHeight + document.documentElement.scrollTop;

    const threshold = document.documentElement.offsetHeight - 100;

    if (scrollPosition >= threshold && !fetching) {
      fetchMovies();
    }
  }, [fetchMovies, fetching]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <div className={style.container}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
      {fetching && <div>Загрузка...</div>}
    </div>
  );
};
