import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroImage from './HeroImage';

test('renders hero image component', () => {
  render(<HeroImage src="test.jpg" alt="Test Hero" title="Test Title" />);
  const titleElement = screen.getByText(/test title/i);
  expect(titleElement).toBeInTheDocument();
});

test('hero image changes opacity when disabled', () => {
  render(<HeroImage src="test.jpg" alt="Test Hero" disabled />);
  const heroElement = screen.getByAltText(/test hero/i).parentElement;
  expect(heroElement).toHaveStyle('opacity: 0.5');
});