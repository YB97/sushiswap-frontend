import React from 'react'

import ComingSoon from '../../assets/img/coming-soon.png'
import { StyledOverlay, StyledPopup } from '../InviteModal/styled'
import {
  StyledBg,
  // StyledHeader,
  StyledImage,
  StyledText,
  StyledWrapper,
} from './styled'

const AlertInfoModal = () => {
  return (
    <StyledOverlay>
      <StyledBg>
        <StyledPopup>
          <StyledWrapper>
            <StyledImage>
              <img style={{ width: '456px' }} src={ComingSoon} alt="coming" />
            </StyledImage>
            <StyledText>
              We're upgrading the system. Farming will be live in few hours.
            </StyledText>
          </StyledWrapper>
        </StyledPopup>
      </StyledBg>
    </StyledOverlay>
  )
}

export default AlertInfoModal
