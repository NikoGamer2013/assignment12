export interface DropdownProps {
  options: Array<{ value: string; label: string }>;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
}