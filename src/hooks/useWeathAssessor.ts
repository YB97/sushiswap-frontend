import { BigNumber } from 'bignumber.js'
import { useState, useEffect, useCallback } from 'react'

import { getChknWealthAssessor, getFarms } from '../sushi/utils'
import { getBalanceNumber } from '../utils/formatBalance'
import useSushi from './useSushi'

const useWeathAssessor = () => {
  const chkn = useSushi()
  const wealthAssessorContract = getChknWealthAssessor(chkn)
  const [holdingValue, setHoldingValue] = useState<string>()
  const [maxPair, setMaxPair] = useState<{ token0: string; token1: string }>()

  const getWealthInFLPByPair = useCallback(async () => {
    const resAll = await Promise.all(
      PAIRS.map((pair) =>
        wealthAssessorContract?.methods
          .wealthInFLPByPair(
            '0x810236118cAEF30b10E01dAd5A015e5cc0A63A6f', // the buffer address
            pair.token0, // CHKN
            pair.token1, // WETH
            '0xdAC17F958D2ee523a2206206994597C13D831ec7', // USDT
          )
          .call(),
      ),
    )

    const values = resAll.map((res) =>
      getBalanceNumber(new BigNumber(res), 6).toFixed(2),
    )

    const getMax = (values) => {
      let max = '0'
      let idx = -1
      values.forEach((item: string, i) => {
        if (Number(item) > Number(max)) {
          max = item
          idx = i
        }
      })

      return { value: max, idx }
    }

    const max = getMax(values)

    setHoldingValue(max.value)
    setMaxPair(PAIRS[max.idx])
  }, [wealthAssessorContract])

  useEffect(() => {
    getWealthInFLPByPair()
  }, [getWealthInFLPByPair])

  return { holdingValue, maxPair }
}

export default useWeathAssessor

export const PAIRS = [
  {
    token0: '0x297C338Da24BeEcD4C412a3537650AC9010ea628', // CHKN
    token1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
  },
  {
    token0: '0x297C338Da24BeEcD4C412a3537650AC9010ea628', // CHKN
    token1: '0xdac17f958d2ee523a2206206994597c13d831ec7', // USDT
  },
  {
    token0: '0x297C338Da24BeEcD4C412a3537650AC9010ea628', // CHKN
    token1: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', // UNI
  },
  {
    token0: '0x297C338Da24BeEcD4C412a3537650AC9010ea628', // CHKN
    token1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2', // SUSHI
  },
  {
    token0: '0xdac17f958d2ee523a2206206994597c13d831ec7', // USDT
    token1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
  },
  {
    token0: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // USDC
    token1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
  },
  {
    token0: '0x6b175474e89094c44da98b954eedeac495271d0f', // DAI
    token1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
  },
  {
    token0: '0x514910771af9ca656af840dff83e8264ecf986ca', // LINK
    token1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
  },
  {
    token0: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', // UNI
    token1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
  },
  {
    token0: '0x6b175474e89094c44da98b954eedeac495271d0f', // DAI
    token1: '0xdac17f958d2ee523a2206206994597c13d831ec7', // USDT
  },
  {
    token0: '0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83', // UFII
    token1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
  },
  {
    token0: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03', // LEND
    token1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
  },
  {
    token0: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f', // SNX
    token1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
  },
  {
    token0: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e', // YFI
    token1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
  },
  {
    token0: '0xd46ba6d942050d489dbd938a2c909a5d5039a161', // AMPL
    token1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
  },
]
