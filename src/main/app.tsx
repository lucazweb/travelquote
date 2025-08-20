import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../presentation/pages";
import { QuoteForm } from "../presentation/pages/quote-form";
import { QuoteList } from "../presentation/pages/quote-list";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<QuoteForm />} />
        <Route path="/list" element={<QuoteList />} />
      </Routes>
    </BrowserRouter>
  );
};
