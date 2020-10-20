import React, { useContext, useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import Button from '../../chknComponents/Button'
import Spinner from '../../chknComponents/Spinner'
import useReferral from '../../hooks/useReferral'
import useSushi from '../../hooks/useSushi'
import useTokenBalance from '../../hooks/useTokenBalance'
import {
  getChknStakeRewardPool,
  getSushiAddress,
  getSushiSupply,
} from '../../sushi/utils'
import { getBalanceNumber, numberWithCommas } from '../../utils/formatBalance'
import {
  Wrapper,
  Paper,
  PaperWrapper,
  Item,
  Title,
  LargeNumber,
  SectionWrapper,
  Text,
  PoolPrice,
  ProgressBar,
  ProgressBarActive,
  FlexBox,
  ProgressNumber,
  SecondaryText,
  InviteLink,
  StakeButton,
  UnstakeButton,
} from './styled'
import UnlockWallet from '../../chknComponents/UnlockWallet'
import AddModal from '../../chknComponents/AddModal'
import useReferralRewards from '../../hooks/useReferralRewards'
import useStakedRewards from '../../hooks/useStakedRewards'
import { LangContext } from '../../contexts/Lang'
import StakeModal from '../../chknComponents/StakeModal'
import { decToBn } from '../../utils'

const CHKNProfile = () => {
  const { account } = useWallet()
  const chkn = useSushi()
  const chknBalance = useTokenBalance(getSushiAddress(chkn))
  const { generate, getReferralLink, currentLink } = useReferral()
  const stakeRewardContract = getChknStakeRewardPool(chkn)

  const { messages } = useContext(LangContext)

  const {
    points: referralPoints,
    invitedNum,
    totalReferralPoints,
    isTotalLoading,
    milestone,
    milestoneProgress,
    referralReward,
    referralUnclaimedReward,
    referralClaim,
  } = useReferralRewards()

  const {
    stakeMilestone,
    stakeMilestoneProgress,
    stakedReward,
    stakeUnclaimedReward,
    stakePoints,
    qualified,
    totalQualifiedPoints,
    stakedClaim,
  } = useStakedRewards()

  const [isCopied, setCopied] = useState<boolean>(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [stackRewardPrc, setStackRewardPrc] = useState<number>()
  const [totalSupply, setTotalSupply] = useState<BigNumber>()
  const [modalVisible, setModalVisible] = useState(false)
  const [stakeModalVisible, setStakeModalVisible] = useState(false)
  const [unstakeModalVisible, setUnstakeModalVisible] = useState(false)
  const [stakedValue, setStakedValue] = useState()

  useEffect(() => {
    const getStakeOf = async () => {
      if (stakeRewardContract) {
        const res = await stakeRewardContract.methods
          .stakeOf(account, '0x297c338da24beecd4c412a3537650ac9010ea628')
          .call()

        setStakedValue(res)
      }
    }

    getStakeOf()
  }, [account, stakeRewardContract])

  useEffect(() => {
    if (account) {
      getReferralLink() // get exiting referral link
    }
  }, [account, getReferralLink])

  useEffect(() => {
    async function fetchTotalSupply() {
      const supply = await getSushiSupply(chkn)

      setTotalSupply(supply)
    }
    if (chkn) {
      fetchTotalSupply()
    }
  }, [chkn])

  useEffect(() => {
    const num =
      !isNaN(Number(chknBalance)) && !isNaN(Number(totalSupply))
        ? Number(chknBalance) / Number(totalSupply)
        : undefined

    setStackRewardPrc(num)
  }, [chknBalance, totalSupply])

  if (!account) {
    return <UnlockWallet />
  }

  const generateAndGetValue = async () => {
    setIsGenerating(true)
    try {
      await generate()
      await getReferralLink()
    } catch (err) {
      console.log('error', err)
    } finally {
      setIsGenerating(false)
    }
  }

  const onClickCopy = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <Wrapper>
      <PaperWrapper>
        <Paper>
          <Item>
            <Title>{messages.profile.referral.title}</Title>
            <SectionWrapper>
              <LargeNumber>{invitedNum}</LargeNumber>
              <Text>{messages.profile.referral.invited}</Text>
            </SectionWrapper>
            <SectionWrapper>
              <PoolPrice>
                $
                {milestoneProgress !== undefined &&
                !isNaN(Number(milestoneProgress)) ? (
                  numberWithCommas(
                    (Number(milestoneProgress) * 0.65 * 0.75).toFixed(2),
                  )
                ) : (
                  <span style={{ marginLeft: '5px' }}>
                    <Spinner color="#407aeb" />
                  </span>
                )}
              </PoolPrice>
              <FlexBox alignItems="center">
                <ProgressBar isLock={false}>
                  <ProgressBarActive
                    progress={`${
                      (milestoneProgress &&
                        milestone &&
                        Number(milestoneProgress) / Number(milestone)) ||
                      0
                    }%`}
                  />
                </ProgressBar>
                <ProgressNumber>
                  {milestone ? (
                    `$${numberWithCommas(
                      (Number(milestone) * 0.65 * 0.75).toFixed(2),
                    )}`
                  ) : (
                    <Spinner size="small" color="#a3abbf" />
                  )}
                  {/* ${numberWithCommas(totalReferralRewardPool.toString())} */}
                </ProgressNumber>
              </FlexBox>
              <Text>{messages.profile.referral.rewardPool}</Text>
            </SectionWrapper>
            <SectionWrapper>
              <PoolPrice isBlackColor>
                {!isNaN(Number(referralReward)) &&
                  !isNaN(Number(milestone)) &&
                  (
                    (Number(referralReward) * 0.65 * 0.75) /
                    Number(milestone)
                  ).toFixed(2)}
                %
              </PoolPrice>
              <FlexBox alignItems="center" addMedia>
                <Text>{messages.profile.referral.own}</Text>
                <SecondaryText>
                  {referralPoints} /{' '}
                  {isTotalLoading || totalReferralPoints === undefined ? (
                    <Spinner size="small" color="#a3abbf" />
                  ) : (
                    totalReferralPoints
                  )}{' '}
                  {messages.profile.referral.points}
                </SecondaryText>
              </FlexBox>
            </SectionWrapper>
            <SectionWrapper>
              <PoolPrice isBlackColor>
                $
                {referralReward !== undefined &&
                !isNaN(Number(referralReward)) ? (
                  numberWithCommas(
                    (Number(referralReward) * 0.65 * 0.75).toFixed(2),
                  )
                ) : (
                  <span style={{ marginLeft: '5px' }}>
                    <Spinner color="#222A3F" />
                  </span>
                )}
              </PoolPrice>
              <Text>{messages.profile.referral.estimatedReward}</Text>
            </SectionWrapper>
            <SectionWrapper>
              <Text>{messages.profile.referral.inviteMore}</Text>
              <CopyToClipboard text={currentLink || ''}>
                <InviteLink
                  onClick={currentLink ? onClickCopy : generateAndGetValue}
                >
                  {currentLink ? (
                    isCopied ? (
                      'Copied'
                    ) : (
                      currentLink.slice(12)
                    )
                  ) : isGenerating ? (
                    <Spinner />
                  ) : (
                    messages.profile.buttons.generate
                  )}
                </InviteLink>
              </CopyToClipboard>
            </SectionWrapper>
            <FlexBox margin="40px 0 0 0" flexDirection="column">
              <Text>
                {/* $0.00 USDT{' '} */}$
                {Number(referralUnclaimedReward).toFixed(2)} USDT{' '}
                {/* ${(Number(milestoneProgress) * 0.65 * 0.75).toFixed(2)} USDT{' '} */}
                {messages.profile.referral.unlocked}
              </Text>
              <FlexBox margin="5px 0 0 0">
                <Button
                  shape="rect"
                  theme="green"
                  height="60px"
                  onClick={referralClaim}
                >
                  {messages.profile.buttons.collect}
                </Button>
              </FlexBox>
            </FlexBox>
          </Item>
          <Item hasLeftBorder>
            <Title>{messages.profile.stake.title}</Title>
            <SectionWrapper>
              <LargeNumber>
                {/* {false ? ( */}
                {stakedValue ? (
                  numberWithCommas(
                    getBalanceNumber(new BigNumber(stakedValue)).toFixed(3),
                  )
                ) : (
                  <Spinner color="#407aeb" />
                )}
              </LargeNumber>
              <Text>{messages.profile.stake.currentPool}</Text>
            </SectionWrapper>
            <SectionWrapper>
              <PoolPrice>
                $
                {stakeMilestoneProgress ? (
                  numberWithCommas(stakeMilestoneProgress)
                ) : (
                  <span style={{ marginLeft: '5px' }}>
                    <Spinner color="#407aeb" />
                  </span>
                )}
              </PoolPrice>
              <FlexBox alignItems="center">
                <ProgressBar isLock={false}>
                  <ProgressBarActive
                    progress={`${stackRewardPrc?.toFixed(2) || 0}%`}
                  />
                </ProgressBar>
                <ProgressNumber>
                  {stakeMilestone ? (
                    `$${numberWithCommas(
                      (Number(stakeMilestone) * 0.1).toFixed(2),
                    )}`
                  ) : (
                    <Spinner size="small" color="#a3abbf" />
                  )}
                </ProgressNumber>
              </FlexBox>
              <Text>{messages.profile.stake.rewardPool}</Text>
            </SectionWrapper>
            <SectionWrapper>
              <PoolPrice isBlackColor>
                {stakePoints && totalQualifiedPoints ? (
                  numberWithCommas(
                    qualified
                      ? (
                          Number(stakePoints) / Number(totalQualifiedPoints)
                        ).toFixed(2)
                      : '0.00',
                  )
                ) : (
                  <span style={{ marginRight: '5px' }}>
                    <Spinner color="#222A3F" />
                  </span>
                )}
                %
              </PoolPrice>
              <Text>{messages.profile.stake.own}</Text>
            </SectionWrapper>
            <SectionWrapper>
              <PoolPrice isBlackColor>
                $
                {stakedReward ? (
                  numberWithCommas(stakedReward)
                ) : (
                  <span style={{ marginLeft: '5px' }}>
                    <Spinner color="#222A3F" />
                  </span>
                )}
              </PoolPrice>
              <Text>{messages.profile.stake.estimatedReward}</Text>
            </SectionWrapper>
            <SectionWrapper>
              <Text>
                {stakedValue &&
                  numberWithCommas(
                    getBalanceNumber(new BigNumber(stakedValue)).toFixed(3),
                  )}{' '}
                CHKN staked
              </Text>
              <FlexBox margin="5px 0 0 0" addMedia>
                <StakeButton>
                  <Button
                    shape="rect"
                    theme="primary"
                    height="60px"
                    onClick={() => setStakeModalVisible(true)}
                  >
                    {messages.profile.buttons.stake}
                  </Button>
                </StakeButton>
                <UnstakeButton>
                  <Button
                    shape="rect"
                    theme="light-red"
                    height="60px"
                    onClick={() => setUnstakeModalVisible(true)}
                  >
                    {messages.profile.buttons.unstake}
                  </Button>
                </UnstakeButton>
              </FlexBox>
            </SectionWrapper>
            <FlexBox margin="40px 0 0 0" flexDirection="column">
              <Text>
                {/* $0.00{' '} */}
                {stakeUnclaimedReward &&
                  Number(stakeUnclaimedReward).toFixed(2)}{' '}
                {/* {milestoneProgress &&
                  (Number(milestoneProgress) * 0.1).toFixed(2)}{' '} */}
                USDT {messages.profile.stake.unlocked}
              </Text>
              <FlexBox margin="5px 0 0 0">
                <Button
                  shape="rect"
                  theme="green"
                  height="60px"
                  onClick={stakedClaim}
                >
                  {messages.profile.buttons.collect}
                </Button>
              </FlexBox>
            </FlexBox>
          </Item>
        </Paper>
      </PaperWrapper>
      {modalVisible && (
        <AddModal
          onOverlayClick={() => setModalVisible(false)}
          onBtnClick={() => setModalVisible(false)}
          showText={false}
        />
      )}
      {stakeModalVisible && (
        <StakeModal
          onOverlayClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setStakeModalVisible(false)
          }}
          isStake
          onCancel={() => setStakeModalVisible(false)}
          onBtnClick={async (amount: string) => {
            if (amount && !isNaN(Number(amount))) {
              console.log('amount', amount, decToBn(Number(amount)))
              const res = await stakeRewardContract.methods
                .deposit(
                  '0x297c338da24beecd4c412a3537650ac9010ea628',
                  decToBn(Number(amount)).toString(),
                )
                .send({ from: account })
                .on('transactionHash', (tx) => {
                  console.log(tx)
                  return tx.transactionHash
                })

              setStakeModalVisible(false)

              console.log('res', res)
            }
          }}
        />
      )}
      {unstakeModalVisible && (
        <StakeModal
          onOverlayClick={(e) => {
            console.log('hello')
            e.preventDefault()
            e.stopPropagation()
            setStakeModalVisible(false)
          }}
          max={stakedValue}
          onCancel={() => setUnstakeModalVisible(false)}
          title="Unstake CHKN"
          onBtnClick={async (amount: string) => {
            if (amount && !isNaN(Number(amount))) {
              const res = await stakeRewardContract.methods
                .withdraw(
                  '0x297c338da24beecd4c412a3537650ac9010ea628',
                  decToBn(Number(amount)).toString(),
                )
                .send({ from: account })
                .on('transactionHash', (tx) => {
                  console.log(tx)
                  return tx.transactionHash
                })

              console.log('withdraw', res)

              setUnstakeModalVisible(false)
            }
          }}
        />
      )}
    </Wrapper>
  )
}

export default CHKNProfile
