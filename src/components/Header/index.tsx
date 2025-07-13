import { Link } from "react-router";

import style from "./header.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <img className={style.logo} src="../assets/kinopoisk.jpg" alt="логотип кинопоиска" />
      <ul className={style.list}>
        <li>
          <Link to="/">Главная страница</Link>
        </li>
        <li>
          <Link to="/favourites">Избранное</Link>
        </li>
      </ul>
    </header>
  );
};
