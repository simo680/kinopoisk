import { observer } from "mobx-react-lite";
import { useState } from "react";
import type { Movie } from "../../api/type";
import { Modal } from "../Modal";

import style from "./MovieItem.module.scss";
import FavouritesStore from "../../store/FavouritesStore";

type MovieItemProps = {
  movie: Movie;
};

export const MovieItem = observer(({ movie }: MovieItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { toggleFavourite, isFavourite } = FavouritesStore;

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleAddToFavourites = () => {
    toggleFavourite(movie);
    handleCloseModal();
  };

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
      <button
        onClick={(e) => {
          e.stopPropagation(); 
          e.preventDefault(); 
          handleOpenModal();
        }}
      >
        апвп
      </button>

      {isOpen && (
        <Modal onClose={handleCloseModal}>
          <p>{movie.name}</p>
          <button onClick={handleAddToFavourites}>
            {isFavourite(movie.id)
              ? "Удалить из избранного"
              : "Добавить в избранное"}
          </button>
        </Modal>
      )}
    </div>
  );
});
