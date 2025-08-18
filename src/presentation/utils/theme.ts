import { createTheme } from "@mui/material";
import { orange, red } from "@mui/material/colors";
import type { Theme } from "@mui/material/styles";

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: red[200],
    },
  },
  status: {
    danger: orange[200],
  },
});
