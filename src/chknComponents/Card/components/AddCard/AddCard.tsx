import React, { useContext } from 'react'
import { LangContext } from '../../../../contexts/Lang'

import Icon from '../../../Icon'
import {
  StyledIconWrapper,
  StyledSubtitle,
  StyledTitle,
  StyledWrapper,
  StyledText,
} from './styled'

const AddCard = () => {
  const { messages } = useContext(LangContext)
  return (
    <StyledWrapper>
      <StyledIconWrapper>
        <Icon iconName="add" />
      </StyledIconWrapper>
      <StyledTitle>{messages.stake.next_egg_card.title} </StyledTitle>
      <StyledSubtitle>{messages.stake.next_egg_card.subtitle}</StyledSubtitle>
      <StyledText>{messages.stake.next_egg_card.text}</StyledText>
    </StyledWrapper>
  )
}

export default AddCard
