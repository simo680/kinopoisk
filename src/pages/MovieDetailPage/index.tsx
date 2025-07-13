import { useEffect, useState } from "react";
import { getMovieById } from "../../api/movies";
import { useParams } from "react-router-dom";
import type { Movie } from "../../api/type";

import style from "./MovieDetailPage.module.scss";
import { MoviesMock } from "../../mocks/MoviesMocks";

export const MovieDetailPage = () => {
  const [movie, setMovie] = useState<Movie>();
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      // const data = await getMovieById(Number(id));
      const data = MoviesMock.docs.find((movie) => movie.id === Number(id));
      if (data) {
        setMovie(data);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <div>Загрузка...</div>;
  if (!movie) return <div>Ошибка загрузки</div>;

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
