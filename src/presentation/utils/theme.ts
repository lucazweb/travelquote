import { createTheme } from "@mui/material";
import { orange, purple } from "@mui/material/colors";
import type { Theme } from "@mui/material/styles";

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: purple[900],
    },
  },
  status: {
    danger: orange[200],
  },
});
