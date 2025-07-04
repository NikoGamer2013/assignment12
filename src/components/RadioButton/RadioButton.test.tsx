import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioButton from './RadioButton';

test('renders radio button component', () => {
  render(<RadioButton name="test" value="test" label="Test Radio" />);
  const radioElement = screen.getByRole('radio');
  expect(radioElement).toBeInTheDocument();
});

test('radio button changes opacity when disabled', () => {
  render(<RadioButton name="test" value="test" label="Test Radio" disabled />);
  const containerElement = screen.getByRole('radio').parentElement;
  expect(containerElement).toHaveStyle('opacity: 0.5');
});