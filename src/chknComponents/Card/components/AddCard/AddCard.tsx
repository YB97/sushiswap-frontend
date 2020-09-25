import React from 'react'

import Icon from '../../../Icon'
import {
  StyledIconWrapper,
  StyledSubtitle,
  StyledTitle,
  StyledWrapper,
  StyledText,
} from './styled'

const AddCard = () => {
  return (
    <StyledWrapper>
      <StyledIconWrapper>
        <Icon iconName="add" />
      </StyledIconWrapper>
      <StyledTitle>Vote for the Next Egg</StyledTitle>
      <StyledSubtitle>CHKN is your governance token</StyledSubtitle>
      <StyledText>
        As a CHKN holder, you will get to vote on which Eggs the farm launches
        in the next phase of the platform.
      </StyledText>
    </StyledWrapper>
  )
}

export default AddCard
