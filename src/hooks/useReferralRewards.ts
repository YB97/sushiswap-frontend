import { useCallback, useEffect, useState } from 'react'
import { useWallet } from 'use-wallet'
import BigNumber from 'bignumber.js'

import useSushi from './useSushi'
import { getChknReferralRewardPool } from '../sushi/utils'
import { getBalanceNumber } from '../utils/formatBalance'

const useReferralRewards = () => {
  const [invitedNum, setInvitedNum] = useState(0)
  const [points, setPoints] = useState<string>()
  const [milestone, setMilestone] = useState<string>()
  const [referralReward, setReferralReward] = useState<string>()
  const [referralUnclaimedReward, setReferralUnclaimedReward] = useState<
    string
  >()
  const [milestoneProgress, setMilestoneProgress] = useState<string>()
  const [totalReferralPoints, setTotalReferralPoints] = useState<string>()
  const [
    totalQualifiedReferralPoints,
    setTotalQualifiedReferralPoints,
  ] = useState<string>()
  const [referralQualified, setReferralQualified] = useState<boolean>()
  const [isTotalLoading, setTotalLoading] = useState(false)

  const { account } = useWallet()
  const chkn = useSushi()
  const referralRewardContract = getChknReferralRewardPool(chkn)

  const getInvitedNumber = useCallback(async () => {
    if (referralRewardContract) {
      const res = await referralRewardContract.methods
        .referralCount(account)
        .call()

      setInvitedNum(res)
    }
  }, [account, referralRewardContract])

  const getReferralPoints = useCallback(async () => {
    if (referralRewardContract) {
      const res = await referralRewardContract.methods.points(account).call()
      const point = getBalanceNumber(new BigNumber(res)).toFixed(2)

      setPoints(point)
    }
  }, [account, referralRewardContract])

  const getTotalReferralPoints = useCallback(async () => {
    if (referralRewardContract) {
      setTotalLoading(true)
      const res = await referralRewardContract.methods.totalPoints().call()
      const total = getBalanceNumber(new BigNumber(res)).toFixed(2)

      setTotalReferralPoints(total)
      setTotalLoading(false)
    }
  }, [referralRewardContract])

  const getMilestone = useCallback(async () => {
    if (referralRewardContract) {
      const res = await referralRewardContract.methods.milestoneGoal().call()
      const value = getBalanceNumber(new BigNumber(res), 6).toFixed(2)

      setMilestone(value)
    }
  }, [referralRewardContract])

  const getMilestoneProgress = useCallback(async () => {
    if (referralRewardContract) {
      const res = await referralRewardContract.methods
        .milestoneProgress()
        .call()
      const value = getBalanceNumber(new BigNumber(res), 6).toFixed(2)

      setMilestoneProgress(value)
    }
  }, [referralRewardContract])

  const getReferralReward = useCallback(async () => {
    if (referralRewardContract) {
      const res = await referralRewardContract.methods.reward(account).call()
      const value = getBalanceNumber(new BigNumber(res), 6).toFixed(2)

      setReferralReward(value)
    }
  }, [account, referralRewardContract])

  const getInclaimedReward = useCallback(async () => {
    if (referralRewardContract) {
      const res = await referralRewardContract.methods
        .unclaimedReward(account)
        .call()
      const value = getBalanceNumber(new BigNumber(res), 6).toFixed(2)

      setReferralUnclaimedReward(value)
    }
  }, [account, referralRewardContract])

  const referralClaim = useCallback(async () => {
    if (referralRewardContract) {
      const res = await referralRewardContract.methods.claim().call()

      setReferralReward(res)
    }
  }, [referralRewardContract])

  const getReferralQualifiedTotal = useCallback(async () => {
    if (referralRewardContract) {
      const res = await referralRewardContract.methods
        .totalQualifiedPoints()
        .call()

      const value = getBalanceNumber(new BigNumber(res)).toFixed(2)

      setTotalQualifiedReferralPoints(value)
    }
  }, [referralRewardContract])

  const getQualified = useCallback(async () => {
    if (referralRewardContract) {
      const res = await referralRewardContract.methods.qualified(account).call()

      setReferralQualified(res)
    }
  }, [account, referralRewardContract])

  useEffect(() => {
    getInvitedNumber()
    getTotalReferralPoints()
    getReferralPoints()
    getMilestone()
    getMilestoneProgress()
    getReferralReward()
    getInclaimedReward()
    getReferralQualifiedTotal()
    getQualified()
  }, [
    getInclaimedReward,
    getInvitedNumber,
    getMilestone,
    getMilestoneProgress,
    getQualified,
    getReferralPoints,
    getReferralQualifiedTotal,
    getReferralReward,
    getTotalReferralPoints,
  ])

  return {
    invitedNum,
    totalReferralPoints,
    isTotalLoading,
    points,
    milestone,
    milestoneProgress,
    referralReward,
    referralUnclaimedReward,
    totalQualifiedReferralPoints,
    referralQualified,
    referralClaim,
  }
}

export default useReferralRewards
