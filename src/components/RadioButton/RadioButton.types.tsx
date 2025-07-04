export interface RadioButtonProps {
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  disabled?: boolean;
  color?: string;
  backgroundColor?: string;
}