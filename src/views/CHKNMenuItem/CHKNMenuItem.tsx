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

import burnChiliIcon from '../../assets/img/burn-chili.png'
import {
  Wrapper,
  Description,
  Text,
  CardList,
  CardWrapper,
  CardItem,
} from './styled'

const CHKNMenuItem = () => {
  const [requestedApproval, setRequestedApproval] = useState(false)

  const { id } = useParams()
  const {
    pid,
    lpToken,
    lpTokenAddress,
    // tokenAddress,
    earnToken,
    // name,
    // icon,
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
    history.push('/menu')
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const stakedBalance = useStakedBalance(pid)

  const lpContract = useMemo(() => {
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
  const { onStake } = useStake(pid)

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

  return (
    <Container>
      <Wrapper>
        <Description>
          <img src={burnChiliIcon} alt="" />
          <H1>Ghost Pepper Heat!</H1>
          <Text>
            Deposit {id} Tokens and earn {earnTokenName}
          </Text>
        </Description>
        <CardList>
          <CardWrapper>
            <CardItem
              type="menu"
              title="0.00"
              subtitle="CHKN Earned"
              btnText="Approve"
              isBtnDisabled
              onBtnClick={() => console.log('btn click')}
            />
          </CardWrapper>
          <CardWrapper>
            <CardItem
              type="menu"
              title={getBalanceNumber(stakedBalance).toString()}
              subtitle={id}
              btnText={
                isNotAllowed ? `Approve ${lpToken.toUpperCase()}` : 'Unstake'
              }
              isBtnDisabled={requestedApproval}
              onBtnClick={isNotAllowed ? handleApprove : onPresentWithdraw}
              hasAddBtn={!!allowance.toNumber()}
              onAddBtnClick={onPresentDeposit}
            />
          </CardWrapper>
        </CardList>
      </Wrapper>
    </Container>
  )
}

export default CHKNMenuItem
