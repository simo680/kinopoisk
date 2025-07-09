import { Link } from "react-router";

export const Header = () => {
  return (
    <header>
      <ul>
        <Link to="/">Главная страница</Link>
        <Link to="/favourites">Избранное</Link>
      </ul>
    </header>
  );
};
