import React from 'react';
import styled from 'styled-components';
import { TableProps, TableHeaderProps, TableRowProps, TableCellProps, TableFooterProps } from './Table.types';

const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${props => props.backgroundColor || 'white'};
  border: 1px solid ${props => props.borderColor || '#ddd'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'default'};
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const StyledTableHeader = styled.thead<TableHeaderProps>`
  background-color: ${props => props.backgroundColor || '#f5f5f5'};
  color: ${props => props.color || '#333'};
  font-weight: bold;
`;

const StyledTableRow = styled.tr<TableRowProps>`
  background-color: ${props => props.backgroundColor || 'transparent'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  
  &:hover {
    background-color: ${props => props.disabled ? 'transparent' : props.hoverColor || '#f9f9f9'};
  }
`;

const StyledTableCell = styled.td<TableCellProps>`
  padding: ${props => props.padding || '12px'};
  text-align: ${props => props.textAlign || 'left'};
  border-bottom: 1px solid #ddd;
  
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const StyledTableFooter = styled.tfoot<TableFooterProps>`
  background-color: ${props => props.backgroundColor || '#f5f5f5'};
  color: ${props => props.color || '#333'};
  font-weight: bold;
`;

export const Table: React.FC<TableProps> = ({ children, ...props }) => {
  return <StyledTable {...props}>{children}</StyledTable>;
};

export const TableHeader: React.FC<TableHeaderProps> = ({ children, ...props }) => {
  return <StyledTableHeader {...props}>{children}</StyledTableHeader>;
};

export const TableRow: React.FC<TableRowProps> = ({ children, ...props }) => {
  return <StyledTableRow {...props}>{children}</StyledTableRow>;
};

export const TableCell: React.FC<TableCellProps> = ({ children, ...props }) => {
  return <StyledTableCell {...props}>{children}</StyledTableCell>;
};

export const TableFooter: React.FC<TableFooterProps> = ({ children, ...props }) => {
  return <StyledTableFooter {...props}>{children}</StyledTableFooter>;
};