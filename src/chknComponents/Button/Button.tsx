import React from 'react'
import { StyledButton } from './styled'

interface ButtonProps {
  className?: string
  height?: string
  href?: string
  loading?: boolean
  disabled?: boolean
  shape?: 'rect' | 'half-round'
  type?: 'button' | 'submit' | 'reset'
  onClick?: (e) => void
  theme?: 'primary' | 'blue' | 'white' | 'light-blue' | 'yellow' | 'green'
  size?: 'normal' | 'small'
}

const Button: React.FC<ButtonProps> = ({
  className,
  theme,
  loading,
  disabled,
  height,
  ...props
}) => {
  return (
    <StyledButton
      type={props.type}
      shape={props.shape}
      height={height}
      theme={theme}
      className={className}
      onClick={props.onClick}
      disabled={disabled}
    >
      {loading ? 'loading...' : props.children}
    </StyledButton>
  )
}

export default Button

Button.defaultProps = {
  theme: 'primary',
  shape: 'half-round',
}
