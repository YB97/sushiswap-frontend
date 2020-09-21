import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'
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
import getInviteLink from './helpers/getInviteLink'
import { useWallet } from 'use-wallet'
import { COPIED_DELAY } from './constants'

const Home = () => {
  const [isCopied, setCopied] = useState<boolean>(false)
  const history = useHistory()
  const { account } = useWallet()

  const onInvite = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), COPIED_DELAY)
  }

  const renderInviteButton = () => {
    const invitedLink = account ? getInviteLink(account) : null
    return (
      invitedLink && (
        <StyledButtonWrap>
          <CopyToClipboard text={invitedLink}>
            <StyledButton theme="blue" onClick={onInvite}>
              {isCopied ? 'Copied' : 'Invite & Earn'}
            </StyledButton>
          </CopyToClipboard>
        </StyledButtonWrap>
      )
    )
  }

  return (
    <Main>
      <InfoBlock>
        <LogoLarge iconName="logo-large" />
        <Text>Stake Uniswap LP tokens to claim your very own yummy CHKN</Text>
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
          <StyledButton onClick={() => history.push('/menu')}>
            {/* <Img src={chiliIcon} alt="add spice" /> */}
            Add Spice
          </StyledButton>
        </StyledButtonWrap>
        {renderInviteButton()}
      </ButtonsWrapper>
    </Main>
  )
}

export default Home
