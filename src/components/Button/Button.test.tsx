import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

test('renders button component', () => {
  render(<Button>Test Button</Button>);
  const buttonElement = screen.getByText(/test button/i);
  expect(buttonElement).toBeInTheDocument();
});

test('button changes background color when disabled', () => {
  render(<Button disabled>Disabled Button</Button>);
  const buttonElement = screen.getByText(/disabled button/i);
  expect(buttonElement).toHaveStyle('background-color: #cccccc');
});