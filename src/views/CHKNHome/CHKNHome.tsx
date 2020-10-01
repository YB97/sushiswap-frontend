import React, { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { useHistory } from 'react-router-dom'

import Container from '../../chknComponents/Container'
import InviteModal from '../../chknComponents/InviteModal'
import useTokenBalance from '../../hooks/useTokenBalance'
import useSushi from '../../hooks/useSushi'
import { getBalanceNumber } from '../../utils/formatBalance'
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
} from './styled'
import useBlock from '../../hooks/useBlock'

const Home = () => {
  const [isOpenInviteModal, setIsOpenInviteModal] = useState<boolean>(false)
  const [totalSupply, setTotalSupply] = useState<BigNumber>()
  const [rewords, setRewords] = useState<any>()
  const history = useHistory()
  const { account } = useWallet()
  const sushi = useSushi()
  const block = useBlock()

  const sushiBalance = useTokenBalance(getSushiAddress(sushi))
  const masterChefContract = getMasterChefContract(sushi)

  useEffect(() => {
    async function fetchTotalSupply() {
      const supply = await getSushiSupply(sushi)
      setTotalSupply(supply)
    }
    if (sushi) {
      fetchTotalSupply()
    }
  }, [sushi, setTotalSupply])

  useEffect(() => {
    async function fetchRewords() {
      const rewardsPerBlock = await getRewardsPerBlock(
        masterChefContract,
        block,
      )

      setRewords(rewardsPerBlock)
    }

    fetchRewords()
  }, [block, masterChefContract, sushi])

  const onToggleInviteModal = () => {
    setIsOpenInviteModal(!isOpenInviteModal)
  }

  const renderInviteButton = () => {
    return (
      account && (
        <StyledButtonWrap>
          <StyledButton theme="blue" onClick={onToggleInviteModal}>
            Invite & Earn
          </StyledButton>
        </StyledButtonWrap>
      )
    )
  }

  return (
    <>
      <Container>
        <Main>
          <InfoBlock>
            <LogoLarge iconName="logo-large" />
            <Text>Stake Eggs (farm LP tokens) to hatch your very own CHKN</Text>
          </InfoBlock>
          <CardList>
            <StyledCard
              iconName="logo-circle"
              title="Your CHKN Balance"
              value={
                !!account ? getBalanceNumber(sushiBalance).toString() : 'Locked'
              }
              bottomText="Pending Harvest"
              bottomValue="0.00"
              bottomUnits="CHKN"
              // onCardClick={() => console.log('click')}
              isFooterVisible
            />
            <StyledCard
              title="Total CHKN Supply"
              value={
                totalSupply
                  ? getBalanceNumber(totalSupply).toString()
                  : 'Locked'
              }
              bottomText="New rewards per block"
              bottomValue={rewords?.toString()}
              bottomUnits="CHKN"
              // onCardClick={() => console.log('click1')}
              isFooterVisible
            />
          </CardList>
          <ButtonsWrapper>
            <StyledButtonWrap>
              <StyledButton onClick={() => history.push('/stake')}>
                {/* <Img src={chiliIcon} alt="add spice" /> */}
                Stake
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
