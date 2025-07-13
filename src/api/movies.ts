import { kinoApi } from "./kinopoisk";
import type { Movie, Movies } from "./type";

export const getMovies = async (
  page: number = 1,
  limit: number = 50,
  genres: string[] = [],
  rating: [number, number] = [1, 10],
  years: [number, number] = [1990, new Date().getFullYear()]
) => {
  try {
    const response = await kinoApi.get<Movies>("/movie", {
      params: {
        page,
        limit,
        "genres.name": genres.length ? genres : undefined,
        "rating.kp": `${rating[0]}-${rating[1]}`,
        year: `${years[0]}-${years[1]}`,
        notNullFields: ["poster.url"],
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
