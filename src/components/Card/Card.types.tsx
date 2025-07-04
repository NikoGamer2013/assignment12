export interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: string;
  padding?: string;
  disabled?: boolean;
  onClick?: () => void;
  shadow?: boolean;
}