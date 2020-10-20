import React, { useState } from 'react'
import Button from '../Button'
import { StyledHeader, StyledWrapper } from '../AddModal/styled'
import { StyledBg } from '../AlertInfoModal/styled'

import { StyledOverlay, StyledPopup } from '../InviteModal/styled'
import { StyledInput } from './styled'

const StakeModal: any = ({
  onOverlayClick,
  onPopupClick,
  onBtnClick,
  onCancel,
  title = 'Stake CHKN',
}) => {
  const [value, setValue] = useState()

  return (
    <StyledOverlay onClick={onOverlayClick}>
      <StyledBg onClick={onPopupClick}>
        <StyledPopup>
          <StyledWrapper>
            <StyledHeader>{title || 'Stake CHKN'}</StyledHeader>

            <StyledInput
              value={value}
              onChange={(e: any) => setValue(e.target.value)}
              placeholder="Amount"
            />
            <div style={{ marginTop: '20px', display: 'flex' }}>
              <Button shape="rect" onClick={onCancel} theme="light-red">
                Cancel
              </Button>
              <div style={{ marginLeft: '10px' }}>
                <Button shape="rect" onClick={() => onBtnClick(value)}>
                  {title}
                </Button>
              </div>
            </div>
          </StyledWrapper>
        </StyledPopup>
      </StyledBg>
    </StyledOverlay>
  )
}

export default StakeModal
