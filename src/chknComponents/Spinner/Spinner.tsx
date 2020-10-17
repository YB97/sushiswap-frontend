import React, { FC } from 'react'

import { StyledSpinnerWrapper, StyledSpinner } from './styled'

interface Props {
  size?: 'small' | 'medium'
  color?: string
}

const Spinner: FC<Props> = ({ size, color }) => {
  return (
    <StyledSpinnerWrapper size={size || 'medium'}>
      <StyledSpinner size={size || 'medium'} color={color}>
        <div />
      </StyledSpinner>
    </StyledSpinnerWrapper>
  )
}

export default Spinner
