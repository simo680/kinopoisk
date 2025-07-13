// src/mocks/moviesMock.ts

import type { Movies } from "../api/type";

export const MoviesMock: Movies = {
  docs: [
    {
      id: 1,
      name: "Mock Movie 1",
      year: 2023,
      ageRating: 16,
      rating: {
        kp: 7.5,
      },
      poster: {
        url: "",
      },
      description: "Описание Mock Movie 1",
      genres: [{ name: "боевик" }, { name: "драма" }],
    },
    {
      id: 2,
      name: "Mock Movie 2",
      year: 2022,
      ageRating: 12,
      rating: {
        kp: 6.8,
      },
      poster: {
        url: "",
      },
      description: "Описание Mock Movie 2",
      genres: [{ name: "комедия" }],
    },
    {
      id: 3,
      name: "Mock Movie 3",
      year: 2021,
      ageRating: 18,
      rating: {
        kp: 8.2,
      },
      poster: {
        url: "",
      },
      description: "Описание Mock Movie 3",
      genres: [{ name: "триллер" }, { name: "драма" }],
    },
  ],
  limit: 10,
  page: 1,
};
