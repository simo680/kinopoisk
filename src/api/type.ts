export type Movies = {
  docs: Movie[];
  total: number;
  limit: number;
  page: number;
  pages: number;
};

export type Movie = {
  id: number;
  name: string;
  year: number;
  ageRating: number;
  rating: {
    kp: number;
  };
  poster: {
    url: string;
  };
  description: string;
  genres: {
    name: string;
  }[];
};
