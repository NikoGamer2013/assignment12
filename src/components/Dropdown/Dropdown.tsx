import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<DropdownProps>`
  padding: 12px;
  border: 1px solid ${props => props.borderColor || '#ddd'};
  border-radius: 4px;
  background-color: ${props => props.disabled ? '#f5f5f5' : props.backgroundColor || 'white'};
  color: ${props => props.disabled ? '#999' : props.color || '#333'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-size: 16px;
  min-width: 200px;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
  
  @media (max-width: 768px) {
    min-width: 150px;
    font-size: 14px;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange, placeholder, ...props }) => {
  return (
    <StyledSelect
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      {...props}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;