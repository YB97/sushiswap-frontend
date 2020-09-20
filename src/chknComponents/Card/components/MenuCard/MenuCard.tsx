import React from 'react'
import burnChiliIcon from '../../../../assets/img/burn-chili.png'
import {
  StyledWrapper,
  StyledTitle,
  StyledSubtitle,
  StyledBtn,
  StyledAddBtn,
} from './styled'

export interface MenuCardProps {
  textClassName?: string
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
  onBtnClick,
  btnText = 'Select',
  isBtnDisabled = false,
  hasAddBtn = false,
  isAddBtnDisabled = false,
  onAddBtnClick,
}) => {
  return (
    <StyledWrapper>
      <img src={burnChiliIcon} alt="Select" />
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle className={textClassName}>{subtitle}</StyledSubtitle>
      <StyledBtn onClick={onBtnClick} disabled={isBtnDisabled}>
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
