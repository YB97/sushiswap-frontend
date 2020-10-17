import React, { FC, useState, useContext } from 'react'
import { useWallet } from 'use-wallet'
import { useHistory } from 'react-router-dom'
import BigNumber from 'bignumber.js'

import WalletProviderModal from '../../components/WalletProviderModal'
import { LangContext } from '../../contexts/Lang'
import Button from '../../chknComponents/Button'
import Card from '../../chknComponents/Card'
import Container from '../../chknComponents/Container'
import H1 from '../../chknComponents/H1'
import P from '../../chknComponents/P'
import useFarms from '../../hooks/useFarms'
import useModal from '../../hooks/useModal'
import useAllStakedValue, { StakedValue } from '../../hooks/useAllStakedValue'
import AddModal from '../../chknComponents/AddModal'
import { Farm } from '../../contexts/Farms'
import {
  Main,
  Logo,
  CardList,
  CardWrapper,
  UnlockButtonWrapper,
  StyledAdBanner,
} from './styled'

interface FarmWithStakedValue extends Farm, StakedValue {
  apy: BigNumber
}

const CHKNMenu: FC = () => {
  const { messages } = useContext(LangContext)
  const { account } = useWallet()
  const [farms] = useFarms()
  const history = useHistory()
  const stakedValue = useAllStakedValue()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)
  const [isAddModalVisible, setAddModalVisible] = useState(false)
  const [showText, setShowText] = useState(true)

  if (!account) {
    return (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <UnlockButtonWrapper>
          <Button onClick={onPresentWalletProviderModal}>
            <span>🔓</span> {messages.button.unlock}
          </Button>
        </UnlockButtonWrapper>
      </div>
    )
  }

  const sushiIndex = farms.findIndex(
    ({ tokenSymbol }) => tokenSymbol === 'SUSHI',
  )

  const sushiPrice =
    sushiIndex >= 0 && stakedValue[sushiIndex]
      ? stakedValue[sushiIndex].tokenPriceInWeth
      : new BigNumber(0)

  const BLOCKS_PER_YEAR = new BigNumber(2336000)
  const CHKN_PER_BLOCK = new BigNumber(1000)

  const rows = farms.map((farm, i) => {
    return {
      ...farm,
      ...stakedValue[i],
      apy: stakedValue[i]
        ? sushiPrice
            .times(CHKN_PER_BLOCK)
            .times(BLOCKS_PER_YEAR)
            .times(stakedValue[i].poolWeight)
            .div(stakedValue[i].totalWethValue)
        : null,
    }
  })

  return (
    <Container>
      <Main>
        <Logo iconName="logo-medium" />
        <H1>{messages.stake.title}</H1>
        <P>{messages.stake.subtitle}</P>
        <CardList>
          {rows.map((row: any) => {
            return (
              <CardWrapper key={row.name}>
                <Card
                  type="menu"
                  bottomText="APY"
                  bottomValue={
                    row.apy
                      ? `${row.apy
                          .times(new BigNumber(100))
                          .toNumber()
                          .toLocaleString('en-US')
                          .slice(0, -1)}%`
                      : ''
                  }
                  imgSrc={row.icon}
                  title={messages.stake.tokens[row.tokenSymbol]}
                  subtitle={`Deposit ${row.lpToken} Earn CHKN`}
                  onBtnClick={() => history.push(`/stake/${row.id}`)}
                  isFooterVisible
                  // iconWidth="130px"
                  iconHeight="130px"
                />
              </CardWrapper>
            )
          })}
          <CardWrapper>
            <Card
              type="add"
              onCardClick={() => {
                setShowText(true)
                setAddModalVisible(true)
              }}
            />
          </CardWrapper>
        </CardList>
        <StyledAdBanner
          onClick={() => {
            setShowText(false)
            setAddModalVisible(true)
          }}
        />
      </Main>
      {isAddModalVisible && (
        <AddModal
          onOverlayClick={() => setAddModalVisible(false)}
          onBtnClick={() => setAddModalVisible(false)}
          showText={showText}
        />
      )}
    </Container>
  )
}

export default CHKNMenu
