import React from 'react'

import { useWallet } from 'use-wallet'
import useSushi from '../../hooks/useSushi'
import useTokenBalance from '../../hooks/useTokenBalance'
import { getSushiAddress } from '../../sushi/utils'
import { getBalanceNumber } from '../../utils/formatBalance'
import { BackgroundImg, Chickens } from './styled'

const CHKNBackground = ({ children }) => {
  const { account } = useWallet()
  const sushi = useSushi()

  const sushiBalance = useTokenBalance(getSushiAddress(sushi))
  const balance = !!account ? getBalanceNumber(sushiBalance) : 0

  const getLevel = () => {
    if (balance < 50000000) {
      return 0
    }

    if (balance < 500000000) {
      return 1
    }

    if (balance < 1000000000) {
      return 2
    }

    if (balance < 2000000000) {
      return 3
    }

    if (balance < 5000000000) {
      return 4
    }

    if (balance >= 5000000000) {
      return 5
    }

    return 1
  }
  return (
    <BackgroundImg level={getLevel()}>
      <Chickens chicksNum={Math.floor(balance / 1000)}>{children}</Chickens>
    </BackgroundImg>
  )
}

export default CHKNBackground
