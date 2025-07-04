export interface ImgProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  disabled?: boolean;
  onClick?: () => void;
}