import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from './Text';

test('renders text component', () => {
  render(<Text>Test Text</Text>);
  const textElement = screen.getByText(/test text/i);
  expect(textElement).toBeInTheDocument();
});

test('text changes color when disabled', () => {
  render(<Text disabled>Disabled Text</Text>);
  const textElement = screen.getByText(/disabled text/i);
  expect(textElement).toHaveStyle('color: #999999');
});