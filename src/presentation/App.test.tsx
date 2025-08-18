import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App tests", () => {
  test("should render component correctly", () => {
    render(<App />);
    expect(screen.getByText("TripQuote")).toBeTruthy();
  });
});
