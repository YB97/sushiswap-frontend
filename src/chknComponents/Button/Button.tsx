import React from "react";
import { StyledButton } from "./styled";

interface ButtonProps {
  className?: string,
  href?: string,
  loading?: boolean,
  disabled?: boolean,
  type?: 'button' | 'submit' | 'reset',
  onClick?: () => void,
  theme?: 'primary' | 'blue' | 'white' | 'light-blue'
}

const Button: React.FC<ButtonProps> = ({ className, theme, loading, disabled, ...props }) => {
  return (
    <StyledButton
      type={props.type}
      theme={theme}
      className={className}
      onClick={props.onClick}
      disabled={disabled}
    >
      {loading ? "loading..." : props.children}
    </StyledButton>
  );
};

export default Button;

Button.defaultProps = {
  theme: 'primary'
}
