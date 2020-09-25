import React from 'react'
// import Modal from '../Modal'
import ComingSoon from '../../assets/img/coming-soon.png'
import Modal from '../../components/Modal'
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
  onOverlayClick,
  onPopupClick = () => {},
  onBtnClick = () => {},
}) => {
  return (
    <StyledOverlay onClick={onOverlayClick}>
      <StyledBg onClick={onPopupClick}>
        <StyledPopup>
          <StyledWrapper>
            <StyledHeader>Vote for the Next Egg</StyledHeader>
            <StyledImage>
              <img style={{ width: '456px' }} src={ComingSoon} alt="coming" />
            </StyledImage>
            <StyledText>
              CHKN governance and new Egg voting coming soon!
            </StyledText>
            <StyledButton>
              <Button shape="rect" onClick={onBtnClick}>
                Okay
              </Button>
            </StyledButton>
          </StyledWrapper>
        </StyledPopup>
      </StyledBg>
    </StyledOverlay>
  )
}

export default AddModal
