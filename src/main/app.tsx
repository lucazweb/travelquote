import { BrowserRouter, Route, Routes } from "react-router";
import { Home, QuoteDetail, QuoteForm, QuoteList } from "@/presentation/pages";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<QuoteForm />} />
        <Route path="/list" element={<QuoteList />} />
        <Route path="/detail/:id" element={<QuoteDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
