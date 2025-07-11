import { observer } from "mobx-react-lite";
import FavouritesStore from "../../store/FavouritesStore";
import { MovieItem } from "../../components/MovieItem";

import style from "./FavouritesPage.module.scss";

export const FavouritesPage = observer(() => {
  const { favourites } = FavouritesStore;

  if (favourites.length === 0) {
    return <div>В избранном пока пусто</div>;
  }

  return (
    <div className={style.container}>
      {favourites.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
});
