import React from "react";
import { StyledTitle, StyledInput } from "./styled";

interface InputProps {
  disabled?: boolean,
  value?: string,
  onChange?: () => void,
  onBlur?: () => void,
  type?: "text" | "password" | 'email' | 'url',
  title?: string,
  wrapperClassName?: string,
  placeholder?: string,
}

const Input: React.FC<InputProps> = ({
  disabled = false,
  value,
  onChange,
  onBlur,
  type = "text",
  title,
  wrapperClassName,
  placeholder,
}) => {
  return (
    <div className={wrapperClassName}>
      {title && <StyledTitle>{title}</StyledTitle>}
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
