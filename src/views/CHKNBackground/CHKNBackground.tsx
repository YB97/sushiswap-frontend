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

  let start = 0;
  const animChickens = (result, i) => () => {
    if(Date.now() - start < 1200){
      requestAnimationFrame(animChickens(result, i))
      return
    }
    if(i > 7) {
      return 
    }
    if(i - 1 >= 0) {
      result[i-1].style.opacity = '0';
    }
    result[i].style.opacity = '1';
    i++;
    start = Date.now()
    window.requestAnimationFrame(animChickens(result, i))
  }

  const chicksNum = Math.floor(balance / 1000)

  useEffect(() => {
    const result = []
    for (let i = 1; i < 9; i++) {
      const img = document.createElement('img')
      img.src = `/image/${chicksNum}/background-${chicksNum}-frame-${i}.png`
      img.classList.add(`chkn-bg-${chicksNum}-frame-${i}`)
      img.classList.add('chkn-bg')
      img.style.display = 'block'
      img.style.position = 'absolute'
      img.style.bottom = '0'
      img.style.left = '0'
      img.style.width = '100%'
      img.style.opacity = '0'
      result.push(img);
      document.body.appendChild(img)
    }

    window.requestAnimationFrame(animChickens(result, 0))

  }, [chicksNum])
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
