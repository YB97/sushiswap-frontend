import React, { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import Button from '../../chknComponents/Button'
import Spinner from '../../chknComponents/Spinner'
import usePoints from '../../hooks/usePoints'
import useReferral from '../../hooks/useReferral'
import useSushi from '../../hooks/useSushi'
import useTokenBalance from '../../hooks/useTokenBalance'
import { getSushiAddress, getSushiSupply } from '../../sushi/utils'
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

const CHKNProfile = () => {
  const { account } = useWallet()
  const chkn = useSushi()
  const chknBalance = useTokenBalance(getSushiAddress(chkn))
  const {
    pointsShare,
    points,
    totalPoints,
    isTotalPointsLoading,
    rewardShare,
  } = usePoints()
  const { generate, getReferralLink, currentLink } = useReferral()

  const [isCopied, setCopied] = useState<boolean>(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [stackRewardPrc, setStackRewardPrc] = useState<number>()
  const [totalSupply, setTotalSupply] = useState<BigNumber>()
  const [modalVisible, setModalVisible] = useState(false)

  // const chickenContract = getSushiContract(chkn)
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

  const totalReferralRewardPool = 243750

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
            <Title>My Referral Rewards</Title>
            <SectionWrapper>
              <LargeNumber>23</LargeNumber>
              <Text># of people you invited</Text>
            </SectionWrapper>
            <SectionWrapper>
              <PoolPrice>
                $
                {rewardShare !== undefined &&
                !isNaN(Number(rewardShare)) &&
                !isNaN(Number(totalReferralRewardPool)) ? (
                  numberWithCommas(
                    (Number(rewardShare) * totalReferralRewardPool).toFixed(2),
                  )
                ) : (
                  <span style={{ marginLeft: '5px' }}>
                    <Spinner color="#407aeb" />
                  </span>
                )}
              </PoolPrice>
              <FlexBox alignItems="center">
                <ProgressBar isLock={false}>
                  <ProgressBarActive progress={`${rewardShare}%`} />
                </ProgressBar>
                <ProgressNumber>
                  ${numberWithCommas(totalReferralRewardPool.toString())}
                </ProgressNumber>
              </FlexBox>
              <Text>current reward pool</Text>
            </SectionWrapper>
            <SectionWrapper>
              <PoolPrice isBlackColor>
                {!isNaN(Number(pointsShare)) && pointsShare}%
              </PoolPrice>
              <FlexBox alignItems="center" addMedia>
                <Text>% of the pool you own</Text>
                <SecondaryText>
                  {points} /{' '}
                  {isTotalPointsLoading || totalPoints === undefined ? (
                    <Spinner size="small" color="#a3abbf" />
                  ) : (
                    totalPoints
                  )}{' '}
                  points
                </SecondaryText>
              </FlexBox>
            </SectionWrapper>
            <SectionWrapper>
              <PoolPrice isBlackColor>
                $
                {rewardShare !== undefined && !isNaN(Number(rewardShare)) ? (
                  numberWithCommas(
                    (Number(rewardShare) * totalReferralRewardPool).toFixed(2),
                  )
                ) : (
                  <span style={{ marginLeft: '5px' }}>
                    <Spinner color="#222A3F" />
                  </span>
                )}
              </PoolPrice>
              <Text>my current estimated USDT reward</Text>
            </SectionWrapper>
            <SectionWrapper>
              <Text>invite more people</Text>
              <CopyToClipboard text={currentLink || ''}>
                <InviteLink
                  onClick={currentLink ? onClickCopy : generateAndGetValue}
                >
                  {currentLink ? (
                    isCopied ? (
                      'Copied'
                    ) : (
                      currentLink
                    )
                  ) : isGenerating ? (
                    <Spinner />
                  ) : (
                    'Click to generate'
                  )}
                </InviteLink>
              </CopyToClipboard>
            </SectionWrapper>
            <FlexBox margin="40px 0 0 0" flexDirection="column">
              <Text>$1,234 USDT unlocked</Text>
              <FlexBox margin="5px 0 0 0">
                <Button shape="rect" theme="green" height="60px">
                  Collect My Rewards
                </Button>
              </FlexBox>
            </FlexBox>
          </Item>
          <Item hasLeftBorder>
            <Title>My Staking Rewards</Title>
            <SectionWrapper>
              <LargeNumber>
                {/* {false ? ( */}
                {totalSupply ? (
                  numberWithCommas(getBalanceNumber(totalSupply).toFixed(3))
                ) : (
                  <Spinner color="#407aeb" />
                )}
              </LargeNumber>
              <Text>current staked CHKN pool</Text>
            </SectionWrapper>
            <SectionWrapper>
              <PoolPrice>
                $
                {stackRewardPrc !== undefined ? (
                  numberWithCommas((stackRewardPrc * 50000).toFixed(2))
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
                <ProgressNumber>$50,000</ProgressNumber>
              </FlexBox>
              <Text>current reward pool</Text>
            </SectionWrapper>
            <SectionWrapper>
              <PoolPrice isBlackColor>
                {stackRewardPrc !== undefined ? (
                  stackRewardPrc.toFixed(2)
                ) : (
                  <span style={{ marginRight: '5px' }}>
                    <Spinner color="#222A3F" />
                  </span>
                )}
                %
              </PoolPrice>
              <Text>% of the pool you own</Text>
            </SectionWrapper>
            <SectionWrapper>
              <PoolPrice isBlackColor>
                $
                {stackRewardPrc !== undefined ? (
                  numberWithCommas((stackRewardPrc * 50000).toFixed(2))
                ) : (
                  <span style={{ marginLeft: '5px' }}>
                    <Spinner color="#222A3F" />
                  </span>
                )}
              </PoolPrice>
              <Text>my current estimated USDT reward</Text>
            </SectionWrapper>
            <SectionWrapper>
              <Text>
                {numberWithCommas(getBalanceNumber(chknBalance).toFixed(3))}{' '}
                CHKN staked
              </Text>
              <FlexBox margin="5px 0 0 0" addMedia>
                <StakeButton>
                  <Button
                    shape="rect"
                    theme="primary"
                    height="60px"
                    onClick={() => setModalVisible(true)}
                  >
                    Stake My CHKN
                  </Button>
                </StakeButton>
                <UnstakeButton>
                  <Button shape="rect" theme="light-red" height="60px">
                    Unstake
                  </Button>
                </UnstakeButton>
              </FlexBox>
            </SectionWrapper>
            <FlexBox margin="40px 0 0 0" flexDirection="column">
              <Text>$234 USDT unlocked</Text>
              <FlexBox margin="5px 0 0 0">
                <Button shape="rect" theme="green" height="60px">
                  Collect My Rewards
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
    </Wrapper>
  )
}

export default CHKNProfile
