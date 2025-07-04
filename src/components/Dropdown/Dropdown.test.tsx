import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from './Dropdown';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
];

test('renders dropdown component', () => {
  render(<Dropdown options={options} placeholder="Select option" />);
  const dropdownElement = screen.getByRole('combobox');
  expect(dropdownElement).toBeInTheDocument();
});

test('dropdown changes background color when disabled', () => {
  render(<Dropdown options={options} disabled />);
  const dropdownElement = screen.getByRole('combobox');
  expect(dropdownElement).toHaveStyle('background-color: #f5f5f5');
});