import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
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
import Container from '../../chknComponents/Container'
import { useWallet } from 'use-wallet'
import InviteModal from '../../chknComponents/InviteModal'

const Home = () => {
  const [isOpenInviteModal, setIsOpenInviteModal] = useState<boolean>(false)
  const [isFirstWeek, setIsFirstWeek] = useState(false)
  const history = useHistory()
  const { account } = useWallet()

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
            <Text>
              Stake Eggs (farm LP tokens) to hatch your very own CHKN
            </Text>
          </InfoBlock>
          <CardList>
            <StyledCard
              iconName="logo-circle"
              title="Your CHKN Balance"
              value="Locked"
              bottomText="Pending Harvest"
              bottomValue="0.00"
              bottomUnits="CHKN"
              onCardClick={() => console.log('click')}
              isFooterVisible
            />
            <StyledCard
              title="Total CHKN Supply"
              value="Locked"
              bottomText="New rewards per block"
              bottomValue="1.00"
              bottomUnits="CHKN"
              onCardClick={() => console.log('click1')}
              isFooterVisible
            />
          </CardList>
          <ButtonsWrapper>
            <StyledButtonWrap>
              <StyledButton onClick={() => history.push('/stake')}>
                {/* <Img src={chiliIcon} alt="add spice" /> */}
                Stake Eggs
              </StyledButton>
            </StyledButtonWrap>
            {renderInviteButton()}
          </ButtonsWrapper>
        </Main>
      </Container>
      {account && isOpenInviteModal && (
        <InviteModal onIsOpenChange={onToggleInviteModal} isFirstWeek={isFirstWeek} />
      )}
    </>
  )
}

export default Home
