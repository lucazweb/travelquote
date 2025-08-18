import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import type { PropsWithChildren } from "react";
import { theme } from "./theme";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};
