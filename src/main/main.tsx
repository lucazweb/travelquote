import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { ThemeProvider } from "../presentation/utils/theme-provider";
import "../presentation/utils/globals.css";
import { DateFnsAdapter } from "../infra";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <DateFnsAdapter>
        <App />
      </DateFnsAdapter>
    </ThemeProvider>
  </StrictMode>
);
