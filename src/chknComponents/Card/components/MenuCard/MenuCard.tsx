import React, { useContext } from 'react'
import burnChiliIcon from '../../../../assets/img/burn-chili.png'
import { LangContext } from '../../../../contexts/Lang'
import Spinner from '../../../Spinner'
import {
  StyledWrapper,
  StyledTitle,
  StyledSubtitle,
  StyledBtn,
  StyledAddBtn,
  StyledImageWrapper,
  StyledHelpText,
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
  isLoading?: boolean
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
  isLoading = false,
  onAddBtnClick,
  iconWidth,
  iconHeight,
}) => {
  const { messages } = useContext(LangContext)
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
        {isLoading ? <Spinner /> : messages.stake.buttons.select}
      </StyledBtn>
      {hasAddBtn && (
        <StyledAddBtn onClick={onAddBtnClick} disabled={isAddBtnDisabled}>
          +
        </StyledAddBtn>
      )}
      {isLoading && (
        <StyledHelpText>{messages.text.trx_duration}</StyledHelpText>
      )}
    </StyledWrapper>
  )
}

export default MenuCard
