import { useEffect, useState } from "react";
import { getMovieById } from "../../api/movies";
import { useParams } from "react-router-dom";
import type { Movie } from "../../api/type";

import style from "./MovieDetailPage.module.scss";

export const MovieDetailPage = () => {
  const [movie, setMovie] = useState<Movie>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieById(Number(id));
      if (data) setMovie(data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <div>Загрузка...</div>;

  return (
    <div className={style.container}>
      <img
        className={style.poster}
        src={movie.poster.url}
        alt={`Постер фильма ${movie.name}`}
      />
      <h1>{movie.name}</h1>
      <p>{movie.description}</p>
      <p>{movie.rating.kp}</p>
      <p>{movie.year}</p>
      <div>
        {movie.genres.map((genre) => (
          <span key={genre.name}>{genre.name}</span>
        ))}
      </div>
    </div>
  );
};
