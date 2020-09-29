import React from 'react'
import burnChiliIcon from '../../../../assets/img/burn-chili.png'
import {
  StyledWrapper,
  StyledTitle,
  StyledSubtitle,
  StyledBtn,
  StyledAddBtn,
  StyledImageWrapper,
} from './styled'

export interface MenuCardProps {
  textClassName?: string
  imgSrc?: string
  iconWidth?: string
  iconHeight?: string
  title?: string
  subtitle?: string
  btnText?: string
  isBtnDisabled?: boolean
  hasAddBtn?: boolean
  isAddBtnDisabled?: boolean
  onBtnClick?: () => void
  onAddBtnClick?: () => void
}

const MenuCard: React.FC<MenuCardProps> = ({
  textClassName,
  title,
  subtitle,
  imgSrc,
  onBtnClick,
  btnText = 'Select',
  isBtnDisabled = false,
  hasAddBtn = false,
  isAddBtnDisabled = false,
  onAddBtnClick,
  iconWidth,
  iconHeight,
}) => {
  return (
    <StyledWrapper>
      <StyledImageWrapper>
        {/* <img src="egg-king.png" alt="Select" /> */}
        <img
          width={iconWidth}
          height={iconHeight}
          src={imgSrc || burnChiliIcon}
          alt="Select"
        />
      </StyledImageWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle className={textClassName}>{subtitle}</StyledSubtitle>
      <StyledBtn
        theme="light-blue"
        onClick={onBtnClick}
        disabled={isBtnDisabled}
      >
        {btnText}
      </StyledBtn>
      {hasAddBtn && (
        <StyledAddBtn onClick={onAddBtnClick} disabled={isAddBtnDisabled}>
          +
        </StyledAddBtn>
      )}
    </StyledWrapper>
  )
}

export default MenuCard
