import React from 'react'
import Spinner from '../Spinner'
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
  theme?:
    | 'primary'
    | 'blue'
    | 'white'
    | 'light-blue'
    | 'yellow'
    | 'green'
    | 'light-red'
  size?: 'normal' | 'small'
  minWidth?: string
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
      minWidth={props.minWidth}
      className={className}
      onClick={props.onClick}
      disabled={disabled}
    >
      {loading ? <Spinner color="#fff" /> : props.children}
    </StyledButton>
  )
}

export default Button

Button.defaultProps = {
  theme: 'primary',
  shape: 'half-round',
}
