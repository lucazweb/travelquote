import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../presentation/pages";
import { QuoteForm } from "../presentation/pages/quote-form";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<QuoteForm />} />
      </Routes>
    </BrowserRouter>
  );
};
