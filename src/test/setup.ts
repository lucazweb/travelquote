import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest"; // Import matchers for expect

afterEach(() => {
  cleanup(); // Clean up after each test to prevent memory leaks
});
