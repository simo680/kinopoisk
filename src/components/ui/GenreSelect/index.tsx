import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import MoviesStore from "../../../store/MoviesStore";

export const GenreSelect = observer(() => {
  const { selectedGenres, genresList } = MoviesStore;

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    MoviesStore.selectedGenres = event.target.value as string[];
  };

  return (
    <FormControl fullWidth>
      <InputLabel
        sx={{ color: "white", "&.Mui-focused": { color: "white" } }}
        id="genre-select-label"
      >
        Жанры
      </InputLabel>
      <Select
        sx={{
          color: "white",
          bgcolor: "#121212",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#333",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#555",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#bbb",
          },
        }}
        labelId="genre-select-label"
        multiple
        value={selectedGenres}
        onChange={handleChange}
        label="Жанры"
      >
        {genresList.map((genre) => (
          <MenuItem key={genre} value={genre}>
            {genre}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
});
