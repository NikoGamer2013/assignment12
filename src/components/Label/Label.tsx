import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<LabelProps>`
  color: ${props => props.disabled ? '#999999' : props.color || '#333333'};
  font-size: ${props => props.fontSize || '14px'};
  font-weight: ${props => props.fontWeight || 'normal'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: color 0.2s ease;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return <StyledLabel {...props}>{children}</StyledLabel>;
};

export default Label;