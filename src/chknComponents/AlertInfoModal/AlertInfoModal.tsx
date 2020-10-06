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
              Thanks for your patience, we're doing a system upgrade. Site will
              be live again soon. Stay tuned.
            </StyledText>
          </StyledWrapper>
        </StyledPopup>
      </StyledBg>
    </StyledOverlay>
  )
}

export default AlertInfoModal
