import axios from "axios";

export const kinoApi = axios.create({
  baseURL: import.meta.env.VITE_KINOPOISK_API_URL,
  headers: {
    "X-API-KEY": import.meta.env.VITE_KINOPOISK_API_KEY,
    "Content-Type": "application/json",
  },
});
