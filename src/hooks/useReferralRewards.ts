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
  const [isTotalLoading, setTotalLoading] = useState(false)

  const { account } = useWallet()
  const chkn = useSushi()
  const referralRewartContract = getChknReferralRewardPool(chkn)

  const getInvitedNumber = useCallback(async () => {
    if (referralRewartContract) {
      const res = await referralRewartContract.methods
        .referralCount(account)
        .call()

      setInvitedNum(res)
    }
  }, [account, referralRewartContract])

  const getReferralPoints = useCallback(async () => {
    if (referralRewartContract) {
      const res = await referralRewartContract.methods.points(account).call()
      const point = getBalanceNumber(new BigNumber(res)).toFixed(2)

      setPoints(point)
    }
  }, [account, referralRewartContract])

  const getTotalReferralPoints = useCallback(async () => {
    if (referralRewartContract) {
      setTotalLoading(true)
      const res = await referralRewartContract.methods.totalPoints().call()
      const total = getBalanceNumber(new BigNumber(res)).toFixed(2)

      setTotalReferralPoints(total)
      setTotalLoading(false)
    }
  }, [referralRewartContract])

  const getMilestone = useCallback(async () => {
    if (referralRewartContract) {
      const res = await referralRewartContract.methods.milestoneGoal().call()
      const value = getBalanceNumber(new BigNumber(res), 6).toFixed(2)

      setMilestone(value)
    }
  }, [referralRewartContract])

  const getMilestoneProgress = useCallback(async () => {
    if (referralRewartContract) {
      const res = await referralRewartContract.methods
        .milestoneProgress()
        .call()
      const value = getBalanceNumber(new BigNumber(res), 6).toFixed(2)

      setMilestoneProgress(value)
    }
  }, [referralRewartContract])

  const getReferralReward = useCallback(async () => {
    if (referralRewartContract) {
      const res = await referralRewartContract.methods.reward(account).call()
      const value = getBalanceNumber(new BigNumber(res), 6).toFixed(2)

      setReferralReward(value)
    }
  }, [account, referralRewartContract])

  const getInclaimedReward = useCallback(async () => {
    if (referralRewartContract) {
      const res = await referralRewartContract.methods
        .unclaimedReward(account)
        .call()
      const value = getBalanceNumber(new BigNumber(res), 6).toFixed(2)

      setReferralUnclaimedReward(value)
    }
  }, [account, referralRewartContract])

  useEffect(() => {
    getInvitedNumber()
    getTotalReferralPoints()
    getReferralPoints()
    getMilestone()
    getMilestoneProgress()
    getReferralReward()
    getInclaimedReward()
  }, [
    getInclaimedReward,
    getInvitedNumber,
    getMilestone,
    getMilestoneProgress,
    getReferralPoints,
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
  }
}

export default useReferralRewards
