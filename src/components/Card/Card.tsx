import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<CardProps>`
  background-color: ${props => props.disabled ? '#f8f8f8' : props.backgroundColor || 'white'};
  border: 1px solid ${props => props.borderColor || '#ddd'};
  border-radius: ${props => props.borderRadius || '8px'};
  padding: ${props => props.padding || '20px'};
  box-shadow: ${props => props.shadow ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none'};
  cursor: ${props => props.disabled ? 'not-allowed' : props.onClick ? 'pointer' : 'default'};
  opacity: ${props => props.disabled ? 0.6 : 1};
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: ${props => props.disabled ? 'none' : props.onClick ? '0 4px 16px rgba(0, 0, 0, 0.15)' : props.shadow ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none'};
  }
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1.5rem;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const CardSubtitle = styled.p`
  margin: 0 0 16px 0;
  color: #666;
  font-size: 0.9rem;
`;

const CardContent = styled.div`
  color: #333;
`;

const Card: React.FC<CardProps> = ({ children, title, subtitle, onClick, ...props }) => {
  return (
    <StyledCard onClick={props.disabled ? undefined : onClick} {...props}>
      {title && <CardTitle>{title}</CardTitle>}
      {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
      <CardContent>{children}</CardContent>
    </StyledCard>
  );
};

export default Card;