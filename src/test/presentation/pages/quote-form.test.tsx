import { render, screen } from "@testing-library/react";
import { QuoteForm } from "../../../presentation/pages/quote-form";
import "@testing-library/jest-dom";
import { DateFnsAdapter } from "../../../infra";

const makeSut = () => {
  render(
    <DateFnsAdapter>
      <QuoteForm />
    </DateFnsAdapter>
  );
};

describe("Quote form page render tests", () => {
  test("should render form correctly", () => {
    makeSut();
    expect(screen.getByText("TravelQuote")).toBeInTheDocument();
    expect(screen.getByTestId("select-origin")).toBeInTheDocument();
    expect(screen.getByTestId("going-ticket")).toBeInTheDocument();
    expect(screen.getByTestId("back-ticket")).toBeInTheDocument();

    expect(
      screen.getByRole("group", { name: /Going date/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("group", { name: /Back date/i })
    ).toBeInTheDocument();
    expect(screen.getByTestId("food-expenses")).toBeInTheDocument();
    expect(screen.getByTestId("mobility-expenses")).toBeInTheDocument();
    expect(screen.getByTestId("leisure-expenses")).toBeInTheDocument();
    expect(screen.getByTestId("calculate-button")).toBeInTheDocument();
  });
});
