import React, { useEffect, useMemo, useCallback, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'

import useFarm from '../../hooks/useFarm'
import useApprove from '../../hooks/useApprove'
import useUnstake from '../../hooks/useUnstake'
import useStakedBalance from '../../hooks/useStakedBalance'
import useStake from '../../hooks/useStake'
import useModal from '../../hooks/useModal'
import useTokenBalance from '../../hooks/useTokenBalance'
import useAllowance from '../../hooks/useAllowance'
import Container from '../../components/Container'
import H1 from '../../chknComponents/H1'
import WithdrawModal from '../../views/Farm/components/WithdrawModal'
import DepositModal from '../../views/Farm/components/DepositModal'
import { getContract } from '../../utils/erc20'
import { getBalanceNumber } from '../../utils/formatBalance'

import chknIcon from '../../assets/img/chkn.svg'

import {
  Wrapper,
  Description,
  Text,
  CardList,
  CardWrapper,
  CardItem,
} from './styled'
import useEarnings from '../../hooks/useEarnings'
import useReward from '../../hooks/useReward'

const CHKNMenuItem = () => {
  const [requestedApproval, setRequestedApproval] = useState(false)

  const { id } = useParams()
  const {
    pid,
    lpToken,
    lpTokenAddress,
    // tokenAddress,
    earnToken,
    name,
    icon,
  } = useFarm(id) || {
    pid: 0,
    lpToken: '',
    lpTokenAddress: '',
    tokenAddress: '',
    earnToken: '',
    name: '',
    icon: '',
  }

  const { account, ethereum } = useWallet()
  const history = useHistory()

  if (!account) {
    history.push('/stake')
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const stakedBalance = useStakedBalance(pid)
  console.log(
    'stakedBalance',
    stakedBalance,
    'getBalance',
    getBalanceNumber(stakedBalance).toString(),
  )

  const lpContract: any = useMemo(() => {
    return getContract(ethereum as provider, lpTokenAddress)
  }, [ethereum, lpTokenAddress])

  const { onApprove } = useApprove(lpContract)
  const allowance = useAllowance(lpContract)

  const earnTokenName = useMemo(() => {
    return earnToken.toUpperCase()
  }, [earnToken])

  const { onUnstake } = useUnstake(pid)

  const [onPresentWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance}
      onConfirm={onUnstake}
      tokenName={lpToken.toUpperCase()}
    />,
  )

  const tokenBalance = useTokenBalance(lpContract.options.address)
  const earnings = useEarnings(pid)
  console.log(
    'earnings',
    earnings,
    'getBalanceNum',
    getBalanceNumber(earnings).toString(),
  )
  const { onStake } = useStake(pid)

  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useReward(pid)

  const [onPresentDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      onConfirm={onStake}
      tokenName={lpToken.toUpperCase()}
    />,
  )

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)

      const txHash = await onApprove()
      // user rejected tx or didn't go thru
      if (!txHash) {
        setRequestedApproval(false)
      }
    } catch (e) {
      console.log(e)
    }
  }, [onApprove, setRequestedApproval])

  const isNotAllowed = !allowance.toNumber()

  const tokenName = id.split(' ')[0] || ''
  const fullName = `${tokenName} Eggs (Farm LP Tokens)`

  return (
    <Container>
      <Wrapper>
        <Description>
          <img src={icon as string} height="130px" alt="" />
          <H1>{name}</H1>
          <Text>
            Deposit {fullName} and earn {earnTokenName}
          </Text>
        </Description>
        <CardList>
          <CardWrapper>
            <CardItem
              type="menu"
              title={getBalanceNumber(earnings).toString()}
              subtitle="CHKN Earned"
              btnText="Collect"
              iconWidth="100px"
              isBtnDisabled={!earnings.toNumber() || pendingTx}
              isLoading={pendingTx}
              onBtnClick={async () => {
                setPendingTx(true)
                await onReward()
                setPendingTx(false)
              }}
              imgSrc={chknIcon}
            />
          </CardWrapper>
          <CardWrapper>
            <CardItem
              type="menu"
              title={getBalanceNumber(stakedBalance).toString()}
              subtitle={fullName}
              btnText={
                isNotAllowed ? `Approve ${lpToken.toUpperCase()}` : 'Unstake'
              }
              isBtnDisabled={requestedApproval}
              isLoading={requestedApproval}
              onBtnClick={isNotAllowed ? handleApprove : onPresentWithdraw}
              hasAddBtn={!!allowance.toNumber()}
              onAddBtnClick={onPresentDeposit}
              imgSrc={icon as string}
              iconHeight="130px"
            />
          </CardWrapper>
        </CardList>
      </Wrapper>
    </Container>
  )
}

export default CHKNMenuItem
