import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Label from './Label';

test('renders label component', () => {
  render(<Label>Test Label</Label>);
  const labelElement = screen.getByText(/test label/i);
  expect(labelElement).toBeInTheDocument();
});

test('label changes color when disabled', () => {
  render(<Label disabled>Disabled Label</Label>);
  const labelElement = screen.getByText(/disabled label/i);
  expect(labelElement).toHaveStyle('color: #999999');
});