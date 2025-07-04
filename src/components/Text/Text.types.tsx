export interface TextProps {
  children: React.ReactNode;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  textAlign?: 'left' | 'center' | 'right';
  disabled?: boolean;
}