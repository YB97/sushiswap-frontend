import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import useTokenBalance from '../../hooks/useTokenBalance'
import useSushi from '../../hooks/useSushi'
import { getSushiAddress } from '../../sushi/utils'
import { getBalanceNumber } from '../../utils/formatBalance'
import Button from '../Button'
import CardIcon from '../../components/CardIcon'
import Label from '../../components/Label'
import Modal, { ModalProps } from '../../components/Modal'
import ModalActions from '../../components/ModalActions'
import ModalContent from '../../components/ModalContent'
import ModalTitle from '../../components/ModalTitle'
import Spacer from '../../components/Spacer'
import Value from '../../components/Value'
import { StyledIconWrapper, StyledIcon } from './styled'

const AccountModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const { account, reset } = useWallet()

  const handleSignOutClick = useCallback(() => {
    onDismiss!()
    reset()
  }, [onDismiss, reset])

  const sushi = useSushi()
  const sushiBalance = useTokenBalance(getSushiAddress(sushi))

  return (
    <Modal>
      <ModalTitle text="My Account" />
      <ModalContent>
        <Spacer />

        <div style={{ display: 'flex' }}>
          <StyledBalanceWrapper>
            <CardIcon>
              <StyledIconWrapper>
                <StyledIcon iconName="logo-circle" />
              </StyledIconWrapper>
            </CardIcon>
            <StyledBalance>
              <Value value={getBalanceNumber(sushiBalance)} />
              <Label text="CHKN Balance" />
            </StyledBalance>
          </StyledBalanceWrapper>
        </div>

        <Spacer />
        <Button theme="light-blue" href={`https://etherscan.io/address/${account}`}>
          View on Etherscan
        </Button>
        <Spacer />
        <Button theme="light-blue" onClick={handleSignOutClick}>Sign out</Button>
      </ModalContent>
      <ModalActions>
        <Button onClick={onDismiss}>Cancel</Button>
      </ModalActions>
    </Modal>
  )
}

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const StyledBalanceWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.spacing[4]}px;
`

export default AccountModal
