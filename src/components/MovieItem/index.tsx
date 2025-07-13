import { observer } from "mobx-react-lite";
import { useState } from "react";
import type { Movie } from "../../api/type";
import { Modal } from "../Modal";
import FavouritesStore from "../../store/FavouritesStore";
import HeartIcon from "../../assets/Heart.svg?react";

import style from "./MovieItem.module.scss";

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
      <h3 className={style.title}>{movie.name || "Нет имени"}</h3>

      {movie.poster?.url ? (
        <img
          className={style.poster}
          src={movie.poster.url}
          alt={`Фон фильма ${movie.name}`}
        />
      ) : (
        <div className={style.noPoster}>Нет изображения</div>
      )}
      <div className={style.info}>
        <p className="">{movie.year || "Не указана дата"} </p>
        <p>{movie.rating.kp || "0"}</p>
        <button
          className={style.favouriteBtn}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleOpenModal();
          }}
        >
          <HeartIcon />
        </button>
      </div>

      {isOpen && (
        <Modal onClose={handleCloseModal}>
          <h1>{movie.name}</h1>
          <button
            className={style.favouriteBtnModal}
            onClick={handleAddToFavourites}
          >
            {isFavourite(movie.id)
              ? "Удалить из избранного"
              : "Добавить в избранное"}
          </button>
        </Modal>
      )}
    </div>
  );
});
