import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../presentation/pages";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<> </>} />
      </Routes>
    </BrowserRouter>
  );
};
