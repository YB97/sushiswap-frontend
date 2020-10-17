import { debounce } from 'debounce'

import React, { FC, useEffect, useRef } from 'react'

import { useWallet } from 'use-wallet'
import useSushi from '../../hooks/useSushi'
import useTokenBalance from '../../hooks/useTokenBalance'
import { getSushiAddress } from '../../sushi/utils'
import { getBalanceNumber } from '../../utils/formatBalance'
import animChickens from './helpers/animChicks'
import { BackgroundImg, Chickens } from './styled'

interface IProps {
  showChicks: boolean
}

const CHKNBackground: FC<IProps> = ({ showChicks, children }) => {
  const { account } = useWallet()
  const sushi = useSushi()

  const sushiBalance = useTokenBalance(getSushiAddress(sushi))
  const balance = !!account ? getBalanceNumber(sushiBalance) : 0
  const chknContainerRef = useRef(null)

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

  const onResize = () => {
    const imgs = Array.from(document.getElementsByClassName('chkn-bg'))
    imgs.forEach((img: HTMLImageElement) => {
      img.style.bottom = ''
      img.style.bottom = '0'
    })
  }

  const debouncedOnResize = debounce(onResize, 300)

  const chicksNum = Math.floor(balance / 1000)

  useEffect(() => {
    const currentChicksNum = chicksNum > 15 ? 15 : chicksNum
    console.log('chicksNum', chicksNum)
    if (currentChicksNum === 0) return

    const result = []
    for (let i = 1; i < 9; i++) {
      const img = document.createElement('img')
      img.src = `/image/${currentChicksNum}/background-${currentChicksNum}-frame-${i}.png`
      img.classList.add(`chkn-bg-${currentChicksNum}-frame-${i}`)
      img.classList.add('chkn-bg')
      img.style.display = 'block'
      img.style.position = 'absolute'
      img.style.bottom = '0'
      img.style.left = '0'
      img.style.width = '100%'
      img.style.opacity = '0'
      result.push(img)
      chknContainerRef.current.appendChild(img)
    }

    window.requestAnimationFrame(animChickens(result, 0))
  }, [chicksNum])

  useEffect(() => {
    window.addEventListener('resize', debouncedOnResize)
    return () => {
      window.removeEventListener('resize', debouncedOnResize)
    }
  }, [debouncedOnResize])
  return (
    <BackgroundImg level={getLevel()}>
      <Chickens
        ref={chknContainerRef}
        chicksNum={chicksNum > 15 ? 15 : chicksNum}
        showChicks={showChicks}
      >
        {children}
      </Chickens>
    </BackgroundImg>
  )
}

export default CHKNBackground
