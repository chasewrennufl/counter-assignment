// import necessary react testing library helpers here
// import the Counter component here
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
})

test('renders counter message', () => {
  render(<Counter />);
  const counterComponent = screen.getByText("Counter");
  expect(counterComponent).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
    render(<Counter />);
    const countElement = screen.getByTestId("count");
    expect(countElement.textContent).toBe("0");
});

test('clicking + increments the count', () => {
    render(<Counter />);
    const incrementButton = screen.getByText("+");
    const countElement = screen.getByTestId("count");

    fireEvent.click(incrementButton);
    expect(countElement.textContent).toBe("1");
});

test('clicking - decrements the count', () => {
    render(<Counter />);
    const decrementButton = screen.getByText("-");
    const countElement = screen.getByTestId("count");

    fireEvent.click(decrementButton);
    expect(countElement.textContent).toBe("-1");
});
