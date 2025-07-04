import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps>`
  padding: ${props => 
    props.size === 'small' ? '8px 16px' : 
    props.size === 'large' ? '16px 32px' : '12px 24px'};
  font-size: ${props => 
    props.size === 'small' ? '14px' : 
    props.size === 'large' ? '18px' : '16px'};
  border: ${props => 
    props.variant === 'outline' ? '2px solid' : 'none'};
  background-color: ${props => 
    props.disabled ? '#cccccc' : props.backgroundColor || '#007bff'};
  color: ${props => 
    props.disabled ? '#666666' : props.color || 'white'};
  border-radius: 4px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  
  &:hover {
    opacity: ${props => props.disabled ? 1 : 0.8};
  }
  
  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;