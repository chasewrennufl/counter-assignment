import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

beforeEach(() => {
  render(<Counter />);
});

test('renders counter message', () => {
  const counterMessage = screen.getByText(/counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCount = screen.getByText(/count: 0/i);
  expect(initialCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+');
  const initialCount = screen.getByText(/count: 0/i);
  fireEvent.click(incrementButton);
  const incrementedCount = screen.getByText(/count: 1/i);
  expect(initialCount).toBeInTheDocument();
  expect(incrementedCount).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText('-');
  const initialCount = screen.getByText(/count: 0/i);
  fireEvent.click(decrementButton);
  const decrementedCount = screen.getByText(/count: -1/i);
  expect(initialCount).toBeInTheDocument();
  expect(decrementedCount).toBeInTheDocument();
});
