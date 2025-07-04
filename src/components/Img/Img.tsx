import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<ImgProps>`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  border-radius: ${props => props.borderRadius || '0'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : props.onClick ? 'pointer' : 'default'};
  transition: opacity 0.2s ease;
  max-width: 100%;
  
  &:hover {
    opacity: ${props => props.disabled ? 0.5 : props.onClick ? 0.8 : 1};
  }
`;

const Img: React.FC<ImgProps> = ({ src, alt, onClick, ...props }) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      onClick={props.disabled ? undefined : onClick}
      {...props}
    />
  );
};

export default Img;