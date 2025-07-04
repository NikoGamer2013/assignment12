import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Img from './Img';

test('renders img component', () => {
  render(<Img src="test.jpg" alt="Test Image" />);
  const imgElement = screen.getByAltText(/test image/i);
  expect(imgElement).toBeInTheDocument();
});

test('img changes opacity when disabled', () => {
  render(<Img src="test.jpg" alt="Test Image" disabled />);
  const imgElement = screen.getByAltText(/test image/i);
  expect(imgElement).toHaveStyle('opacity: 0.5');
});