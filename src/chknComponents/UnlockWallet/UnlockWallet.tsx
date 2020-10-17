import React from 'react'

import WalletProviderModal from '../../components/WalletProviderModal'
import useModal from '../../hooks/useModal'
import { UnlockButtonWrapper } from '../../views/CHKNMenu/styled'
import Button from '../Button'

const UnlockWallet = () => {
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)

  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <UnlockButtonWrapper>
        <Button onClick={onPresentWalletProviderModal}>
          <span>🔓</span> Unlock Wallet
        </Button>
      </UnlockButtonWrapper>
    </div>
  )
}

export default UnlockWallet
