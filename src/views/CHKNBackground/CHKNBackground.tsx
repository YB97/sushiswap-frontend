import React, { FC, useEffect } from 'react'

import { useWallet } from 'use-wallet'
import useSushi from '../../hooks/useSushi'
import useTokenBalance from '../../hooks/useTokenBalance'
import { getSushiAddress } from '../../sushi/utils'
import { getBalanceNumber } from '../../utils/formatBalance'
import { BackgroundImg, Chickens } from './styled'

interface IProps {
  showChicks: boolean
}

const CHKNBackground: FC<IProps> = ({ showChicks, children }) => {
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

    return 0
  }

  // const chicksNum = Math.floor(balance / 1000)
  const chicksNum = 15;

  useEffect(() => {
    for (let i = 1; i < 9; i++) {
      const img = document.createElement('img')
      img.src = `/image/${chicksNum}/background-${chicksNum}-frame-${i}.png`
      img.style.display = 'none'
      document.body.appendChild(img)
    }
  }, [])
  return (
    <BackgroundImg level={getLevel()}>
      <Chickens
        chicksNum={chicksNum > 15 ? 15 : chicksNum}
        showChicks={showChicks}
      >
        {children}
      </Chickens>
    </BackgroundImg>
  )
}

export default CHKNBackground
