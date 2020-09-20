import React, { useCallback } from 'react'
import { useWallet } from 'use-wallet'
import AccountModal from '../../../../components/TopBar/components/AccountModal'
import WalletProviderModal from '../../../../components/WalletProviderModal'
import useModal from '../../../../hooks/useModal'
import { StyledUnclockButton } from './styled'

interface AccountButtonProps {}

const AccountButton: React.FC<AccountButtonProps> = (props) => {
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
      Unlock Wallet
    </StyledUnclockButton>
  ) : (
    <StyledUnclockButton onClick={onPresentAccountModal}>
      My Wallet
    </StyledUnclockButton>
  )
}

export default AccountButton
