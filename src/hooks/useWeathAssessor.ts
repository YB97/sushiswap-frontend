import { BigNumber } from 'bignumber.js'
import { useState, useEffect, useCallback } from 'react'

import { getChknWealthAssessor } from '../sushi/utils'
import { getBalanceNumber } from '../utils/formatBalance'
import useSushi from './useSushi'

const useWeathAssessor = () => {
  const chkn = useSushi()
  const wealthAssessorContract = getChknWealthAssessor(chkn)
  const [holdingValue, setHoldingValue] = useState<string>()

  const getWealthInFLPByPair = useCallback(async () => {
    const res = await wealthAssessorContract?.methods
      .wealthInFLPByPair(
        '0x810236118cAEF30b10E01dAd5A015e5cc0A63A6f', // the buffer address
        '0x297C338Da24BeEcD4C412a3537650AC9010ea628', // CHKN
        '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
        '0xdAC17F958D2ee523a2206206994597C13D831ec7', // USDT
      )
      .call()
    const value = getBalanceNumber(new BigNumber(res), 6).toFixed(2)

    setHoldingValue(value)
  }, [wealthAssessorContract])

  useEffect(() => {
    getWealthInFLPByPair()
  }, [getWealthInFLPByPair])

  return { holdingValue }
}

export default useWeathAssessor
