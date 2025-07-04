import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const RadioContainer = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
`;

const StyledRadioInput = styled.input<RadioButtonProps>`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid ${props => props.disabled ? '#ccc' : '#007bff'};
  border-radius: 50%;
  position: relative;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  
  &:checked::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => props.disabled ? '#ccc' : '#007bff'};
  }
`;

const RadioLabel = styled.label<{ disabled?: boolean; color?: string }>`
  color: ${props => props.disabled ? '#999' : props.color || '#333'};
  font-size: 16px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({ name, value, label, checked, onChange, ...props }) => {
  return (
    <RadioContainer disabled={props.disabled}>
      <StyledRadioInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange?.(value)}
        {...props}
      />
      <RadioLabel disabled={props.disabled} color={props.color}>
        {label}
      </RadioLabel>
    </RadioContainer>
  );
};

export default RadioButton;