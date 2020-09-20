import React from "react";
import { StyledButton } from "./styled";

interface ButtonProps {
  className?: string,
  loading?: boolean,
  disabled?: boolean,
  type?: 'button' | 'submit' | 'reset',
  onClick?: () => void,
}

const Button: React.FC<ButtonProps> = ({ className, loading, disabled, ...props }) => {
  return (
    <StyledButton
      type={props.type}
      className={className}
      onClick={props.onClick}
      disabled={disabled}
    >
      {loading ? "loading..." : props.children}
    </StyledButton>
  );
};

export default Button;
