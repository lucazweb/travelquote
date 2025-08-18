import { Home } from "./pages";
import { ThemeProvider } from "./utils/theme-provider";

export const App = () => (
  <ThemeProvider>
    <Home />
  </ThemeProvider>
);
