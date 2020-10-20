import { useCallback, useEffect, useState } from 'react'
import { useWallet } from 'use-wallet'
import BigNumber from 'bignumber.js'

import useSushi from './useSushi'
import { getChknStakeRewardPool } from '../sushi/utils'
import { getBalanceNumber } from '../utils/formatBalance'

const useStakedRewards = () => {
  const [stakeMilestone, setStakeMilestone] = useState<string>()
  const [stakeMilestoneProgress, setStakeMilestoneProgress] = useState<string>()
  const [stakedReward, setStakedReward] = useState<string>()
  const [stakeUnclaimedReward, setStakeUnclaimedReward] = useState<string>()
  const { account } = useWallet()
  const chkn = useSushi()
  const stakeRewardContract = getChknStakeRewardPool(chkn)

  const getMilestone = useCallback(async () => {
    if (stakeRewardContract) {
      const res = await stakeRewardContract.methods.milestoneGoal().call()
      const value = getBalanceNumber(new BigNumber(res), 6).toFixed(2)

      setStakeMilestone(value)
    }
  }, [stakeRewardContract])

  const getMilestoneProgress = useCallback(async () => {
    if (stakeRewardContract) {
      const res = await stakeRewardContract.methods.milestoneProgress().call()
      const value = getBalanceNumber(new BigNumber(res), 6).toFixed(2)

      setStakeMilestoneProgress(value)
    }
  }, [stakeRewardContract])

  const getStakedReward = useCallback(async () => {
    if (stakeRewardContract) {
      const res = await stakeRewardContract.methods.reward(account).call()
      const value = getBalanceNumber(new BigNumber(res), 6).toFixed(2)

      setStakedReward(value)
    }
  }, [account, stakeRewardContract])

  const getUnclaimedReward = useCallback(async () => {
    if (stakeRewardContract) {
      const res = await stakeRewardContract.methods
        .unclaimedReward(account)
        .call()
      const value = getBalanceNumber(new BigNumber(res), 6).toFixed(2)

      console.log('vakye', value, res)

      setStakeUnclaimedReward(value)
    }
  }, [account, stakeRewardContract])

  const stakedClaim = useCallback(async () => {
    if (stakeRewardContract) {
      const res = await stakeRewardContract.methods.claim().call()
      console.log('staked claim', res)

      setStakedReward(res)
    }
  }, [stakeRewardContract])

  useEffect(() => {
    getMilestone()
    getMilestoneProgress()
    getStakedReward()
    getUnclaimedReward()
  }, [getMilestone, getMilestoneProgress, getStakedReward, getUnclaimedReward])

  return {
    stakeMilestone,
    stakeMilestoneProgress,
    stakedReward,
    stakeUnclaimedReward,
    stakedClaim,
  }
}

export default useStakedRewards
