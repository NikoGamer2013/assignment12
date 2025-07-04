import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table, TableHeader, TableRow, TableCell } from './Table';

test('renders table component', () => {
  render(
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Test Header</TableCell>
        </TableRow>
      </TableHeader>
    </Table>
  );
  const headerElement = screen.getByText(/test header/i);
  expect(headerElement).toBeInTheDocument();
});

test('table changes opacity when disabled', () => {
  render(
    <Table disabled>
      <TableHeader>
        <TableRow>
          <TableCell>Disabled Table</TableCell>
        </TableRow>
      </TableHeader>
    </Table>
  );
  const tableElement = screen.getByRole('table');
  expect(tableElement).toHaveStyle('opacity: 0.5');
});