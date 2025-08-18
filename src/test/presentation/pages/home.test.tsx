import { render, screen } from "@testing-library/react";
import { Home } from "../../../presentation/pages";

describe("Home render tests", () => {
  test("should render page correctly", () => {
    render(<Home />);
    expect(screen.getByText("TravelQuote")).toBeTruthy();
    expect(
      screen.getByText(
        "Create travel’s quotes as fast as possible and share it easily"
      )
    ).toBeTruthy();
    expect(screen.getByText("Create new quote")).toBeTruthy();
  });
});
