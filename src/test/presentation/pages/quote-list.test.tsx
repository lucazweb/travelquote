import { render, screen } from "@testing-library/react";
import { QuoteList } from "@presentation/pages/quote-list";
import { MemoryRouter } from "react-router";
import { vi } from "vitest";

const mockedNavigate = vi.fn();
vi.mock("@presentation/hooks/useProfile", () => ({
  useNavigate: () => mockedNavigate,
}));

describe("Quote list tests", () => {
  test("should render page correctly", () => {
    render(
      <MemoryRouter>
        <QuoteList />
      </MemoryRouter>
    );
    expect(screen.getByText("TravelQuote")).toBeTruthy();
    expect(screen.getByText("Directions")).toBeTruthy();
    expect(screen.getByText("Travel date")).toBeTruthy();
    expect(screen.getByText("Duration (days)")).toBeTruthy();
    expect(screen.getByText("Total")).toBeTruthy();
  });
});
