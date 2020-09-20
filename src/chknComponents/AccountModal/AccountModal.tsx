import React from 'react'
import Modal from '../Modal'

import burnChiliIcon from '../../assets/img/burn-chili.png'
import {
  StyledBalance,
  StyledBalanceDesc,
  StyledBalanceWrapper,
  StyledButton,
  StyledHeader,
  StyledIcon,
  StyledWrapper,
} from './styled'

interface AccountModalProps {
  visible?: boolean
  onClose?: () => void
  balance?: string
  onViewEther?: () => void
  onSignOut?: () => void
  onCancel?: () => void
}

const AccountModal: React.FC<AccountModalProps> = ({
  visible,
  onClose,
  balance,
  onViewEther,
  onSignOut,
  onCancel,
}) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <StyledWrapper>
        <StyledHeader>My account</StyledHeader>
        <StyledIcon src={burnChiliIcon} alt="Account" />
        <StyledBalanceWrapper>
          <StyledBalance>{balance}</StyledBalance>
          <StyledBalanceDesc>CHKN Balance</StyledBalanceDesc>
        </StyledBalanceWrapper>

        <StyledButton onClick={onViewEther}>View on Etherscan</StyledButton>
        <StyledButton onClick={onSignOut}>Sign Out</StyledButton>
        <StyledButton onClick={onCancel}>Cancel</StyledButton>
      </StyledWrapper>
    </Modal>
  )
}

export default AccountModal
