import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../components/Counter";

describe("Counter", () => {
  test("renders Counter component", () => {
    render(<Counter />);
    const counterComponent = screen.getByText("Counter");
    expect(counterComponent).toBeInTheDocument();
  });

  test("renders count as 0 initially", () => {
    render(<Counter />);
    const countElement = screen.getByTestId("count");
    expect(countElement.textContent).toBe("0");
  });

  test("increments count when the + button is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("+");
    const countElement = screen.getByTestId("count");

    fireEvent.click(incrementButton);
    expect(countElement.textContent).toBe("1");
  });

  test("decrements count when the - button is clicked", () => {
    render(<Counter />);
    const decrementButton = screen.getByText("-");
    const countElement = screen.getByTestId("count");

    fireEvent.click(decrementButton);
    expect(countElement.textContent).toBe("-1");
  });

});
