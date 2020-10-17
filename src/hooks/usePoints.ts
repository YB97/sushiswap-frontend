import { useCallback, useEffect, useState } from 'react'
import { useWallet } from 'use-wallet'
import { BigNumber } from '../sushi'
import {
  getChknPointsPoolContract,
  getPoints,
  getQualified,
  getTotalPoints,
  getTotalQualifiedPoints,
} from '../sushi/utils'
import { getBalanceNumber } from '../utils/formatBalance'

import useSushi from './useSushi'

const usePoints = () => {
  const [points, setPoints] = useState(0)
  const [qualified, setQualified] = useState(0)
  const [totalPoints, setTotalPoints] = useState<string>()
  const [pointsShare, setPointsShare] = useState<string>()
  const [rewardShare, setRewardShare] = useState<string>()
  const [qualifiedTotalPoints, setQualifiedTotalPoints] = useState<string>()
  const [isTotalPointsLoading, setTotalPointsLoading] = useState(false)
  const { account } = useWallet()
  const sushi = useSushi()
  const pointsPoolContract = getChknPointsPoolContract(sushi)

  const getReferralPoints = useCallback(async () => {
    setTotalPointsLoading(true)
    const points = await getPoints(pointsPoolContract, account)
    setTotalPointsLoading(false)

    setPoints(points)
  }, [account, pointsPoolContract])

  const getReferralQualified = useCallback(async () => {
    // setTotalPointsLoading(true)
    const points = await getQualified(pointsPoolContract, account)
    // setTotalPointsLoading(false)

    setQualified(points)
  }, [account, pointsPoolContract])

  const getReferralTotalPoints = useCallback(async () => {
    const totalPoints = await getTotalPoints(pointsPoolContract)
    const total = getBalanceNumber(new BigNumber(totalPoints)).toFixed(2)

    setTotalPoints(total)
  }, [pointsPoolContract])

  const getReferralTotalQualifiedPoints = useCallback(async () => {
    const totalPoints = await getTotalQualifiedPoints(pointsPoolContract)
    const total = getBalanceNumber(new BigNumber(totalPoints)).toFixed(2)

    setQualifiedTotalPoints(total)
  }, [pointsPoolContract])

  const getPointsShare = useCallback(() => {
    const share = totalPoints
      ? (points / Number(totalPoints)).toFixed(2)
      : undefined

    setPointsShare(share)
  }, [points, totalPoints])

  const getRewardsShare = useCallback(() => {
    const share = qualifiedTotalPoints
      ? (points / Number(qualifiedTotalPoints)).toFixed(2)
      : undefined

    setRewardShare(share)
  }, [points, qualifiedTotalPoints])

  useEffect(() => {
    getReferralPoints()
    getReferralTotalPoints()
    getPointsShare()
    getReferralTotalQualifiedPoints()
    getReferralQualified()
    getRewardsShare()
  }, [
    getPointsShare,
    getReferralPoints,
    getReferralQualified,
    getReferralTotalPoints,
    getReferralTotalQualifiedPoints,
    getRewardsShare,
  ])

  return {
    points,
    totalPoints,
    isTotalPointsLoading,
    pointsShare,
    qualifiedTotalPoints,
    qualified,
    rewardShare,
  }
}

export default usePoints
