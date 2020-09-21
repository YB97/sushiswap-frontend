import React from 'react'
import MenuCard from './components/MenuCard/MenuCard'
import InfoCard from './components/InfoCard'
import {
  StyledBottomBlock,
  StyledBottomValue,
  StyledBottomValueWrapper,
  StyledWrapper,
} from './styled'
import { MenuCardProps } from './components/MenuCard/MenuCard'
import { BigNumber } from '../../sushi'

interface CardProps extends MenuCardProps {
  iconName?: string
  title?: string
  value?: string
  subtitle?: string
  className?: string
  btnText?: string
  type?: 'menu' | 'info'
  onCardClick?: () => void
  onBtnClick?: () => void
  bottomText?: string
  bottomUnits?: string
  bottomValue?: string
  isFooterVisible?: boolean
  isBtnDisabled?: boolean
}

const Card: React.FC<CardProps> = ({ isFooterVisible = false, ...props }) => {
  const renderCardByType = () => {
    switch (props.type) {
      case 'menu':
        return (
          <MenuCard
            title={props.title}
            subtitle={props.subtitle}
            onBtnClick={props.onBtnClick}
            {...props}
          />
        )
      case 'info':
      default:
        return (
          <InfoCard
            iconName={props.iconName}
            title={props.title}
            value={props.value}
          />
        )
    }
  }

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
