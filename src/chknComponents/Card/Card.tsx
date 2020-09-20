import React from 'react'
import MenuCard from './components/MenuCard/MenuCard'
import InfoCard from './components/InfoCard'
import {
  StyledBottomBlock,
  StyledBottomValue,
  StyledBottomValueWrapper,
  StyledWrapper,
} from './styled'

interface CardProps {
  iconName?: string
  title?: string
  value?: string
  className?: string
  type?: 'menu' | 'info'
  onCardClick?: () => void
  bottomText?: string
  bottomUnits?: string
  bottomValue?: string
  isFooterVisible?: boolean
}

const Card: React.FC<CardProps> = ({ isFooterVisible = false, ...props }) => {
  const renderCardByType = () => {
    switch (props.type) {
      case 'menu':
        return <MenuCard title={props.title} />
      case 'info':
      default:
        return <InfoCard iconName={props.iconName} title={props.title} value={props.value} />
    }
  }

  console.log(props);

  return (
    <StyledWrapper className={props.className} onClick={props.onCardClick}>
      {renderCardByType()}
      {isFooterVisible && (
        <StyledBottomBlock>
          <div>{props.bottomText}</div>
          <StyledBottomValueWrapper>
            <StyledBottomValue>{props.bottomValue}</StyledBottomValue>
            {props.bottomUnits}
          </StyledBottomValueWrapper>
        </StyledBottomBlock>
      )}
    </StyledWrapper>
  )
}

export default Card
