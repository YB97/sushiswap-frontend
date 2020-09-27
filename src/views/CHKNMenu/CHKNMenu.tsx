import React, { FC, useState } from 'react'
import { useWallet } from 'use-wallet'
import { useHistory } from 'react-router-dom'
import BigNumber from 'bignumber.js'

import WalletProviderModal from '../../components/WalletProviderModal'
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
} from './styled'

interface FarmWithStakedValue extends Farm, StakedValue {
  apy: BigNumber
}

const CHKNMenu: FC = () => {
  const { account } = useWallet()
  const [farms] = useFarms()
  const history = useHistory()
  const stakedValue = useAllStakedValue()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)
  const [isAddModalVisible, setAddModalVisible] = useState(false)

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
            <span>🔓</span> Unlock Wallet
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
        <H1>Select how to hatch your Chicken</H1>
        <P>Earn CHKN token by staking Uniswap V2 LP tokens</P>
        <CardList>
          {rows.map((row: any) => {
            return (
              <CardWrapper key={row.name}>
                <Card
                  type="menu"
                  bottomText="APY"
                  bottomValue={''}
                  imgSrc={row.icon}
                  title={row.name}
                  subtitle={`Deposit ${row.lpToken} Earn CHKN`}
                  onBtnClick={() => history.push(`/stake/${row.id}`)}
                  isFooterVisible
                />
              </CardWrapper>
            )
          })}
          <CardWrapper>
            <Card type="add" onCardClick={() => setAddModalVisible(true)} />
          </CardWrapper>
        </CardList>
      </Main>
      {isAddModalVisible && (
        <AddModal
          onOverlayClick={() => setAddModalVisible(false)}
          onBtnClick={() => setAddModalVisible(false)}
        />
      )}
    </Container>
  )
}

export default CHKNMenu
