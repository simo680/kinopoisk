import type { Movie } from "../../api/type";
import style from "./MovieItem.module.scss";

type MovieItemProps = {
  movie: Movie;
};

export const MovieItem = ({ movie }: MovieItemProps) => {
  return (
    <div className={style.container}>
      {movie.poster?.url && (
        <img
          className={style.poster}
          src={movie.poster.url}
          alt={`Фон фильма ${movie.name}`}
        />
      )}
      <h3>{movie.name || "нет имени"}</h3>
      <p>{movie.year || "не указана дата"} </p>
    </div>
  );
};
