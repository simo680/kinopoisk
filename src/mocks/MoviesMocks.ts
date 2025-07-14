// src/mocks/moviesMock.ts

import type { Movies } from "../api/type";

import darkKnightPoster from "../assets/batman.jpg";
import fightClubPoster from "../assets/club.jpg";
import forrestGumpPoster from "../assets/forest.jpg";
import inceptionPoster from "../assets/Inception.jpg";
import interstellarPoster from "../assets/inter.jpg";
import shawshankPoster from "../assets/shaw.jpg";

export const MoviesMock: Movies = {
  docs: [
    {
      id: 1,
      name: "Начало",
      year: 2010,
      ageRating: 16,
      rating: {
        kp: 8.8,
      },
      poster: {
        url: inceptionPoster,
      },
      description:
        "Вор, способный проникать в сны других людей, получает задание внедрить идею в подсознание человека.",
      genres: [{ name: "фантастика" }, { name: "боевик" }, { name: "триллер" }],
    },
    {
      id: 2,
      name: "Интерстеллар",
      year: 2014,
      ageRating: 12,
      rating: {
        kp: 8.6,
      },
      poster: {
        url: interstellarPoster,
      },
      description:
        "Группа исследователей отправляется через червоточину в космосе, чтобы спасти человечество.",
      genres: [
        { name: "фантастика" },
        { name: "драма" },
        { name: "приключения" },
      ],
    },
    {
      id: 3,
      name: "Темный рыцарь",
      year: 2008,
      ageRating: 16,
      rating: {
        kp: 8.5,
      },
      poster: {
        url: darkKnightPoster,
      },
      description:
        "Бэтмен противостоит Джокеру, анархисту-террористу, который хочет разрушить Готэм.",
      genres: [{ name: "боевик" }, { name: "криминал" }, { name: "триллер" }],
    },
    {
      id: 4,
      name: "Побег из шоушена",
      year: 1994,
      ageRating: 16,
      rating: {
        kp: 9.1,
      },
      poster: {
        url: shawshankPoster,
      },
      description:
        "Банкир Энди Дюфрейн осужден за убийство жены и ее любовника и приговорен к пожизненному заключению в Шоушенке.",
      genres: [{ name: "драма" }, { name: "криминал" }],
    },
    {
      id: 5,
      name: "Бойцовский клуб",
      year: 1999,
      ageRating: 18,
      rating: {
        kp: 8.7,
      },
      poster: {
        url: fightClubPoster,
      },
      description:
        "Офисный работник и мыловар создают подпольный бойцовский клуб, который превращается в нечто большее.",
      genres: [{ name: "драма" }],
    },
    {
      id: 6,
      name: "Форест Гамп",
      year: 1994,
      ageRating: 12,
      rating: {
        kp: 8.9,
      },
      poster: {
        url: forrestGumpPoster,
      },
      description:
        "История жизни Форреста Гампа, человека с невысоким IQ, но добрым сердцем.",
      genres: [{ name: "драма" }, { name: "романтика" }],
    },
  ],
  limit: 10,
  page: 1,
};
