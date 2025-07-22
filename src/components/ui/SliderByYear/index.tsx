import { Slider } from "@mui/material";
import { observer } from "mobx-react-lite";
import MoviesStore from "../../../store/MoviesStore";

export const SliderByYear = observer(() => {
  const { yearRange } = MoviesStore;

  const MAX = 2025;
  const MIN = 1990;
  const marks = [
    { value: MIN, label: "" },
    { value: MAX, label: "" },
  ];

  const handleChange = (_event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      MoviesStore.setYearRange([newValue[0], newValue[1]]);
    }
  };

  return (
    <Slider
      getAriaLabel={() => "Year range"}
      marks={marks}
      min={MIN}
      max={MAX}
      value={yearRange}
      onChange={handleChange}
      valueLabelDisplay="auto"
      disableSwap
    />
  );
});
