import React, { useEffect, useState, useContext } from 'react'
import { LangContext } from '../../contexts/Lang'
import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { useHistory } from 'react-router-dom'

import Container from '../../chknComponents/Container'
import InviteModal from '../../chknComponents/InviteModal'
import useTokenBalance from '../../hooks/useTokenBalance'
import useSushi from '../../hooks/useSushi'
import { getBalanceNumber, numberWithCommas } from '../../utils/formatBalance'
import {
  getMasterChefContract,
  getRewardsPerBlock,
  getSushiAddress,
  getSushiSupply,
} from '../../sushi/utils'
import {
  Main,
  LogoLarge,
  Text,
  InfoBlock,
  StyledButton,
  CardList,
  StyledCard,
  StyledButtonWrap,
  ButtonsWrapper,
  StyledImg,
} from './styled'
import useBlock from '../../hooks/useBlock'
// import Plane from '../../assets/img/plane.png'
import PlaneRefferBonus from '../../assets/img/plane-referral-bonus-25000.png'
// import AdPlaneBanner from '../../chknComponents/AdPlaneBanner'

const Home = () => {
  const [isOpenInviteModal, setIsOpenInviteModal] = useState<boolean>(false)
  const [totalSupply, setTotalSupply] = useState<BigNumber>()
  const [rewards, setRewards] = useState<any>()
  const history = useHistory()
  const { account } = useWallet()
  const chkn = useSushi()
  const block = useBlock()
  const { messages } = useContext(LangContext)

  const sushiBalance = useTokenBalance(getSushiAddress(chkn))
  const masterChefContract = getMasterChefContract(chkn)

  useEffect(() => {
    async function fetchTotalSupply() {
      const supply = await getSushiSupply(chkn)
      const base = new BigNumber(10).pow(18)

      setTotalSupply(supply.minus(new BigNumber(582685000).multipliedBy(base)))
    }
    if (chkn) {
      fetchTotalSupply()
    }
  }, [chkn, setTotalSupply])

  useEffect(() => {
    async function fetchRewords() {
      const rewardsPerBlock = await getRewardsPerBlock(
        masterChefContract,
        block,
      )

      setRewards(rewardsPerBlock)
    }

    fetchRewords()
  }, [block, masterChefContract, chkn])

  const onToggleInviteModal = () => {
    setIsOpenInviteModal(!isOpenInviteModal)
  }

  const renderInviteButton = () => {
    return (
      account && (
        <StyledButtonWrap>
          <StyledButton theme="blue" onClick={onToggleInviteModal}>
            {messages.button.invite}
          </StyledButton>
        </StyledButtonWrap>
      )
    )
  }

  return (
    <>
      <Container>
        <Main>
          <StyledImg>
            <img src={PlaneRefferBonus} alt="referral" />
            {/* <AdPlaneBanner /> */}
          </StyledImg>
          <InfoBlock>
            <LogoLarge iconName="logo-large" />
            <Text>{messages.chknHome.subtitle}</Text>
          </InfoBlock>
          <CardList>
            <StyledCard
              iconName="logo-circle"
              title={messages.card.info.yourBalance}
              value={
                !!account
                  ? numberWithCommas(getBalanceNumber(sushiBalance).toFixed(3))
                  : messages.card.info.balance
              }
              bottomText={messages.card.info.pendingHarvest}
              bottomValue="0.00"
              bottomUnits="CHKN"
              // onCardClick={() => console.log('click')}
              isFooterVisible
            />
            <StyledCard
              title={messages.card.info.totalBalance}
              value={
                totalSupply
                  ? numberWithCommas(
                      Math.abs(getBalanceNumber(totalSupply)).toFixed(3),
                    )
                  : messages.card.info.balance
              }
              bottomText={messages.card.info.rewards}
              bottomValue={rewards?.toString()}
              bottomUnits="CHKN"
              // onCardClick={() => console.log('click1')}
              isFooterVisible
            />
          </CardList>
          <ButtonsWrapper>
            <StyledButtonWrap>
              <StyledButton onClick={() => history.push('/stake')}>
                {/* <Img src={chiliIcon} alt="add spice" /> */}
                {messages.button.stake}
              </StyledButton>
            </StyledButtonWrap>
            {renderInviteButton()}
          </ButtonsWrapper>
        </Main>
      </Container>

      {account && isOpenInviteModal && (
        <InviteModal onIsOpenChange={onToggleInviteModal} />
      )}
    </>
  )
}

export default Home
