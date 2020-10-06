import React from 'react'
import styled from 'styled-components'

import Spacer from '../Spacer'

const ModalActions: React.FC<{ flexDirection?: string }> = ({
  children,
  flexDirection,
}) => {
  const l = React.Children.toArray(children).length
  return (
    <StyledModalActions flexDirection={flexDirection}>
      {React.Children.map(children, (child, i) => (
        <>
          <StyledModalAction>{child}</StyledModalAction>
          {i < l - 1 && <Spacer />}
        </>
      ))}
    </StyledModalActions>
  )
}

const StyledModalActions = styled.div<{ flexDirection?: string }>`
  align-items: flex-start;
  background-color: ${(props) => props.theme.color.grey[100]}00;
  display: flex;
  margin: 0;
  padding: ${(props) => props.theme.spacing[4]}px;
  ${({ flexDirection }) =>
    flexDirection
      ? `
    flex-direction: ${flexDirection}
  `
      : ''}
`

const StyledModalAction = styled.div`
  flex: 1;
`

export default ModalActions
