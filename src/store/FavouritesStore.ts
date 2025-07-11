import { makeAutoObservable } from "mobx";
import type { Movie } from "../api/type";

class Favourites {
  favourites: Movie[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    this.loadLocalStorage();
  }

  toggleFavourite(elem: Movie) {
    const exists = this.favourites.find((fav) => fav.id === elem.id);
    if (exists) {
      this.favourites = this.favourites.filter((fav) => fav.id !== elem.id);
    } else {
      this.favourites.push(elem);
    }
    this.saveLocalStorage();
  }

  saveLocalStorage() {
    localStorage.setItem("favourites", JSON.stringify(this.favourites));
  }

  loadLocalStorage() {
    const data = localStorage.getItem("favourites");
    if (data) {
      this.favourites = JSON.parse(data);
    }
  }

  isFavourite(id: number) {
    return this.favourites.some((fav) => fav.id === id);
  }
}

export default new Favourites();
