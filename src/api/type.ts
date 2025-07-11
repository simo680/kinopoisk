export type Movies = {
  docs: Movie[];
  limit: number;
  page: number;
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
