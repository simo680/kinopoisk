import { kinoApi } from "./kinopoisk";
import type { Movie, Movies } from "./type";

export const getMovies = async (page: number = 1, limit: number = 50) => {
  try {
    const response = await kinoApi.get<Movies>("/movie", {
      params: {
        page,
        limit,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Ошибка при получении фильмов:", error);
  }
};

export const getMovieById = async (id: number) => {
  try {
    const response = await kinoApi.get<Movie>(`/movie/${id}`);
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении фильма:", error);
  }
};
