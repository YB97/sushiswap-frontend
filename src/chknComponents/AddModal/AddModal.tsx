import React, { useContext } from 'react'
// import Modal from '../Modal'
import ComingSoon from '../../assets/img/coming-soon.png'
import Modal from '../../components/Modal'
import { LangContext } from '../../contexts/Lang'
import Button from '../Button'
import { StyledOverlay, StyledPopup } from '../InviteModal/styled'

import {
  StyledHeader,
  StyledWrapper,
  StyledImage,
  StyledText,
  StyledBg,
  StyledButton,
} from './styled'

const AddModal = ({
  showText,
  onOverlayClick,
  onPopupClick = () => {},
  onBtnClick = () => {},
}) => {
  const { messages } = useContext(LangContext)
  return (
    <StyledOverlay onClick={onOverlayClick}>
      <StyledBg onClick={onPopupClick}>
        <StyledPopup>
          <StyledWrapper>
            {showText && (
              <StyledHeader>{messages.stake.next_egg_modal.title}</StyledHeader>
            )}
            <StyledImage>
              <img style={{ width: '456px' }} src={ComingSoon} alt="coming" />
            </StyledImage>
            {showText && (
              <StyledText>{messages.stake.next_egg_modal.text}</StyledText>
            )}
            <StyledButton>
              <Button shape="rect" onClick={onBtnClick}>
                {messages.stake.next_egg_modal.button}
              </Button>
            </StyledButton>
          </StyledWrapper>
        </StyledPopup>
      </StyledBg>
    </StyledOverlay>
  )
}

export default AddModal
