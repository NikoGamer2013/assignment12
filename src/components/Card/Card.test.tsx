import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

test('renders card component', () => {
  render(<Card title="Test Card">Test Content</Card>);
  const titleElement = screen.getByText(/test card/i);
  expect(titleElement).toBeInTheDocument();
});

test('card changes opacity when disabled', () => {
  render(<Card disabled title="Disabled Card">Test Content</Card>);
  const cardElement = screen.getByText(/disabled card/i).parentElement;
  expect(cardElement).toHaveStyle('opacity: 0.6');
});