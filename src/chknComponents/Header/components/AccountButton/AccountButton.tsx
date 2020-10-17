import React, { useCallback, useContext } from 'react'
import { useWallet } from 'use-wallet'
import AccountModal from '../../../AccountModal'
import WalletProviderModal from '../../../../components/WalletProviderModal'
import useModal from '../../../../hooks/useModal'
import { StyledUnclockButton } from './styled'
import { LangContext } from '../../../../contexts/Lang'

interface AccountButtonProps {}

const AccountButton: React.FC<AccountButtonProps> = (props) => {
  const { messages } = useContext(LangContext)
  const [onPresentAccountModal] = useModal(<AccountModal />)
  const [onPresentWalletProviderModal] = useModal(
    <WalletProviderModal />,
    'provider',
  )

  const { account } = useWallet()
  const handleUnlockClick = useCallback(() => {
    onPresentWalletProviderModal()
  }, [onPresentWalletProviderModal])

  return !account ? (
    <StyledUnclockButton onClick={handleUnlockClick}>
      {messages.button.unlock}
    </StyledUnclockButton>
  ) : (
    <StyledUnclockButton onClick={onPresentAccountModal}>
      {messages.button.myWallet}
    </StyledUnclockButton>
  )
}

export default AccountButton
