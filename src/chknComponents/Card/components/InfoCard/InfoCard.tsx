import React from 'react'
import { StyledIcon, StyledMainBlock, StyledTitle, StyledValue } from './styled'

interface InfoCard {
  iconName?: string
  title?: string
  value?: string
}

const InfoCard: React.FC<InfoCard> = ({ iconName, title, value }) => {
  return (
    <>
      <StyledMainBlock>
        {iconName && <StyledIcon iconName={iconName} />}
        <div>
          <StyledTitle>{title}</StyledTitle>
          <StyledValue>{value}</StyledValue>
        </div>
      </StyledMainBlock>
    </>
  )
}

export default InfoCard
