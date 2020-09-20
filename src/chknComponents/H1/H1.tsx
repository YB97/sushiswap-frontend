import React from 'react'
import { StyledH1 } from './styled'

interface H1Props {
  className?: string
  align?: 'center' | 'right' | 'left'
}

const H1: React.FC<H1Props> = ({ className, align, children }) => {
  const style = { textAlign: align }

  return (
    <StyledH1 style={style} className={className}>
      {children}
    </StyledH1>
  )
}

export default H1
