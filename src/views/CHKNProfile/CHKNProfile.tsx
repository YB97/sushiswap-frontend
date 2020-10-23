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
  convertBuffer,
  getChknRewardPoolTokenBuffer,
  getChknStakeRewardPool,
  getChknWealthAssessor,
  getSushiAddress,
  getSushiContract,
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
  StyledIcon,
  TextWrapper,
  ReloadIcon,
  ReloadWrapper,
  FlexWrapper,
} from './styled'
import UnlockWallet from '../../chknComponents/UnlockWallet'
import AddModal from '../../chknComponents/AddModal'
import useReferralRewards from '../../hooks/useReferralRewards'
import useStakedRewards from '../../hooks/useStakedRewards'
import { LangContext } from '../../contexts/Lang'
import StakeModal from '../../chknComponents/StakeModal'
import { decToBn } from '../../utils'
import ModalConfirm from '../../chknComponents/ModalConfirm'
import { StyledLink } from '../../chknComponents/MenuItem/styled'
import Icon from '../../chknComponents/Icon'
import useWeathAssessor from '../../hooks/useWeathAssessor'
import Stepper from '../../chknComponents/Stepper'

const CHKNProfile = () => {
  const { account } = useWallet()
  const chkn = useSushi()
  const chknBalance = useTokenBalance(getSushiAddress(chkn))
  const { generate, getReferralLink, currentLink } = useReferral()
  const stakeRewardContract = getChknStakeRewardPool(chkn)
  const chknContract = getSushiContract(chkn)
  const wealthAssessorContract = getChknWealthAssessor(chkn)
  const rewardPoolTokenBuffer = getChknRewardPoolTokenBuffer(chkn)

  const { messages } = useContext(LangContext)

  const {
    points: referralPoints,
    invitedNum,
    totalReferralPoints,
    isTotalLoading,
    milestone,
    milestoneProgress,
    // referralReward,
    referralUnclaimedReward,
    referralQualified,
    totalQualifiedReferralPoints,
    referralClaim,
  } = useReferralRewards()

  const {
    stakeMilestone,
    stakeMilestoneProgress,
    // stakedReward,
    stakedValue,
    stakeUnclaimedReward,
    stakePoints,
    qualified,
    totalQualifiedPoints,
    stakedClaim,
    getStakeOf,
    getStakedPoints,
    getTotalQualifiedPoints,
  } = useStakedRewards()

  const { holdingValue } = useWeathAssessor()

  const [isCopied, setCopied] = useState<boolean>(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [stackRewardPrc, setStackRewardPrc] = useState<number>()
  const [totalSupply, setTotalSupply] = useState<BigNumber>()
  const [modalVisible, setModalVisible] = useState(false)
  const [stakeModalVisible, setStakeModalVisible] = useState(false)
  const [unstakeModalVisible, setUnstakeModalVisible] = useState(false)
  const [balance, setBalance] = useState<string>()
  const [showModalConfirm, setShowModalConfirm] = useState(false)
  const [totalProgress, setTotalProgress] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const getBalance = async () => {
      if (chknContract) {
        const res = await chknContract.methods
          .balanceOf(stakeRewardContract.options.address)
          .call()
        const balanceChkn = getBalanceNumber(new BigNumber(res))

        setBalance(balanceChkn.toFixed(3))
      }
    }

    getBalance()
  }, [chknContract, stakeRewardContract])

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

  useEffect(() => {
    const comProgress =
      (Number(milestoneProgress) || 0) * 0.65 * 0.75 +
      (Number(stakeMilestoneProgress) || 0) * 0.1

    setTotalProgress(comProgress || 0)
  }, [milestoneProgress, stakeMilestoneProgress])

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

  const isReloadDisabled =
    isNaN(Number(holdingValue)) || Number(holdingValue) < 500

  const onReloadClick = async () => {
    const res = await convertBuffer(
      rewardPoolTokenBuffer,
      '0x297C338Da24BeEcD4C412a3537650AC9010ea628',
      '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    )
      .send({ from: account })
      .on('transactionHash', (tx) => {
        console.log(tx)
        return tx.transactionHash
      })

    console.log('onReloadClick', res)
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
              <PoolPrice fontSize="28px">
                <FlexWrapper>
                  <ReloadWrapper
                    disabled={isReloadDisabled}
                    onClick={!isReloadDisabled ? onReloadClick : () => {}}
                  >
                    <ReloadIcon iconName="reload" />
                  </ReloadWrapper>
                  Unlock Progress
                </FlexWrapper>
                {/* $
                {milestoneProgress !== undefined &&
                !isNaN(Number(milestoneProgress)) ? (
                  numberWithCommas(
                    (Number(milestoneProgress) * 0.65 * 0.75).toFixed(2),
                  )
                ) : (
                  <span style={{ marginLeft: '5px' }}>
                    <Spinner color="#407aeb" />
                  </span>
                )} */}
              </PoolPrice>
              <FlexBox alignItems="center">
                <ProgressBar isLock={false}>
                  <ProgressBarActive
                    progress={`${
                      (milestoneProgress &&
                        milestone &&
                        (Number(milestoneProgress) / Number(milestone)) * 100) >
                      6
                        ? milestoneProgress &&
                          milestone &&
                          (Number(milestoneProgress) / Number(milestone)) * 100
                        : 0
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
                {referralQualified
                  ? (
                      (Number(referralPoints) * 100) /
                      Number(totalQualifiedReferralPoints)
                    ).toFixed(2)
                  : '0.00'}
                %
              </PoolPrice>
              <FlexBox alignItems="center" addMedia>
                <Text>{messages.profile.referral.own}</Text>
                <SecondaryText>
                  {referralPoints} /{' '}
                  {isTotalLoading || totalReferralPoints === undefined ? (
                    <Spinner size="small" color="#a3abbf" />
                  ) : (
                    totalQualifiedReferralPoints
                  )}{' '}
                  {messages.profile.referral.points}
                </SecondaryText>
              </FlexBox>
            </SectionWrapper>
            <SectionWrapper>
              <PoolPrice isBlackColor>
                $
                {referralPoints && totalQualifiedReferralPoints && milestone ? (
                  numberWithCommas(
                    (
                      (Number(referralPoints) /
                        Number(totalQualifiedReferralPoints)) *
                      Number(milestone) *
                      0.65 *
                      0.75
                    ).toFixed(2),
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
                  onClick={
                    Number(referralUnclaimedReward) === 0
                      ? () => setShowModalConfirm(true)
                      : referralClaim
                  }
                  // onClick={referralClaim}
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
                {balance ? (
                  numberWithCommas(balance)
                ) : (
                  <Spinner color="#407aeb" />
                )}
              </LargeNumber>
              <TextWrapper>
                <Text>{messages.profile.stake.currentPool}</Text>
                <StyledLink
                  fontSize="18px !important"
                  href={`https://etherscan.io/address/0x5b80ED50b875b804698917F100b3324c8149BF17`}
                  target="_blank"
                  rel="noopener noreferrer"
                  margin="10px 0"
                >
                  <StyledIcon iconName="share" /> View on Etherscan
                </StyledLink>
              </TextWrapper>
            </SectionWrapper>

            <SectionWrapper>
              <PoolPrice fontSize="28px">
                Unlock Progress
                {/* $
                {stakeMilestoneProgress ? (
                  numberWithCommas(
                    (Number(stakeMilestoneProgress) * 0.1).toFixed(2),
                  )
                ) : (
                  <span style={{ marginLeft: '5px' }}>
                    <Spinner color="#407aeb" />
                  </span>
                )} */}
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
                          (Number(stakePoints) * 100) /
                          Number(totalQualifiedPoints)
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
                {stakePoints && totalQualifiedPoints && stakeMilestone ? (
                  numberWithCommas(
                    (
                      (Number(stakePoints) / Number(totalQualifiedPoints)) *
                      Number(stakeMilestone) *
                      0.1
                    ).toFixed(2),
                  )
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
                  onClick={
                    Number(stakeUnclaimedReward) === 0
                      ? () => setShowModalConfirm(true)
                      : stakedClaim
                  }
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

              await getStakeOf()
              await getStakedPoints()
              await getTotalQualifiedPoints()

              setStakeModalVisible(false)

              console.log('res', res)
            }
          }}
        />
      )}
      {unstakeModalVisible && (
        <StakeModal
          onOverlayClick={(e) => {
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

              await getStakeOf()
              await getStakedPoints()
              await getTotalQualifiedPoints()

              console.log('withdraw', res)

              setUnstakeModalVisible(false)
            }
          }}
        />
      )}
      {showModalConfirm && (
        <ModalConfirm
          title="Wait for the Reward Pool to Unlock"
          text="Keep inviting more people to stake liquidity on the farm so that the Reward Pool unlocks faster."
          showOnlyConfirmBtn
          onCancel={() => setShowModalConfirm(false)}
          onOverlayClick={() => setShowModalConfirm(false)}
          onConfirm={() => setShowModalConfirm(false)}
        />
      )}
      <PaperWrapper marginTop="30px">
        <Stepper
          margin="0 0 350px 0"
          steps={[
            { active: totalProgress > 295000, label: '$295K' },
            { active: totalProgress > 480000, label: '$480K' },
            { active: totalProgress > 800000, label: '$800K' },
            { active: totalProgress > 1600000, label: '$1.6M' },
            { active: totalProgress > 4500000, label: '$4.5M' },
            { active: totalProgress > 8500000, label: '$8.5M' },
            { active: totalProgress > 15800000, label: '$15.8M' },
            { active: totalProgress > 31500000, label: '$31.5M' },
            { active: totalProgress > 92400000, label: '$92.4M' },
            { active: totalProgress > 159500000, label: '$159.5M' },
          ]}
        />
      </PaperWrapper>
    </Wrapper>
  )
}

export default CHKNProfile
