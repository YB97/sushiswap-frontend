import React from 'react'

import { StyledHeader, StyledWrapper } from '../AddModal/styled'
import { StyledBg } from '../AlertInfoModal/styled'
import { StyledOverlay, StyledPopup } from '../InviteModal/styled'
import Button from '../Button'

interface IProps {
  title: string
  text?: string
  confirmBtnText?: string
  showOnlyConfirmBtn?: boolean
  onCancel: () => void
  onConfirm: () => void
  onOverlayClick: () => void
  handlePopupClick?: () => void
}

const ModalConfirm: React.FC<IProps> = ({
  onOverlayClick,
  handlePopupClick,
  title,
  text,
  confirmBtnText,
  onCancel,
  onConfirm,
  showOnlyConfirmBtn,
}) => {
  return (
    <StyledOverlay onClick={onOverlayClick}>
      <StyledBg onClick={handlePopupClick} maxWidth="400px" minHeight="260px">
        <StyledPopup>
          <StyledWrapper>
            <StyledHeader>{title}</StyledHeader>
            {text && (
              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                {text}
              </div>
            )}
            <div style={{ marginTop: '40px', display: 'flex' }}>
              {!showOnlyConfirmBtn && (
                <Button shape="rect" onClick={onCancel} theme="light-red">
                  Cancel
                </Button>
              )}
              <div style={{ marginLeft: '10px' }}>
                <Button shape="rect" onClick={onConfirm} minWidth="130px">
                  {confirmBtnText || 'OK'}
                </Button>
              </div>
            </div>
          </StyledWrapper>
        </StyledPopup>
      </StyledBg>
    </StyledOverlay>
  )
}

export default ModalConfirm
