export interface TableProps {
  children: React.ReactNode;
  disabled?: boolean;
  backgroundColor?: string;
  borderColor?: string;
}

export interface TableHeaderProps {
  children: React.ReactNode;
  backgroundColor?: string;
  color?: string;
}

export interface TableRowProps {
  children: React.ReactNode;
  disabled?: boolean;
  backgroundColor?: string;
  hoverColor?: string;
}

export interface TableCellProps {
  children: React.ReactNode;
  padding?: string;
  textAlign?: 'left' | 'center' | 'right';
}

export interface TableFooterProps {
  children: React.ReactNode;
  backgroundColor?: string;
  color?: string;
}