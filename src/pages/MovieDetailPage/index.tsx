import { useEffect, useState } from "react";
import { getMovieById } from "../../api/movies";
import { useParams } from "react-router-dom";
import type { Movie } from "../../api/type";

import style from "./MovieDetailPage.module.scss";
// import { MoviesMock } from "../../mocks/MoviesMocks";

export const MovieDetailPage = () => {
  const [movie, setMovie] = useState<Movie>();
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      const data = await getMovieById(Number(id));
      //const data = MoviesMock.docs.find((movie) => movie.id === Number(id));
      if (data) {
        setMovie(data);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <div className={style.loading}>Загрузка...</div>;
  if (!movie) return <div className={style.error}>Ошибка загрузки</div>;

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <img
          className={style.poster}
          src={movie.poster.url}
          alt={`Постер фильма ${movie.name}`}
        />
        <div className={style.info}>
          <h1 className={style.title}>{movie.name}</h1>
          <p className={style.year}>{movie.year}</p>
          <p className={style.description}>{movie.description}</p>
          <div className={style.genres}>
            {movie.genres.map((genre) => (
              <span className={style.genre} key={genre.name}>
                {genre.name}
              </span>
            ))}
          </div>
        </div>
        <div className={style.rating}>
          <p className={style.ratingName}>{movie.rating.kp}</p>
        </div>
      </div>
    </div>
  );
};
