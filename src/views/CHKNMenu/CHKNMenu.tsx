import React, { FC } from 'react'
import { useWallet } from 'use-wallet'
import { useHistory } from 'react-router-dom'
import BigNumber from 'bignumber.js'

import WalletProviderModal from '../../components/WalletProviderModal'
import useModal from '../../hooks/useModal'
import Button from '../../chknComponents/Button'
import Card from '../../chknComponents/Card'
import Container from '../../chknComponents/Container'
import H1 from '../../chknComponents/H1'
import P from '../../chknComponents/P'
import useFarms from '../../hooks/useFarms'
import { Farm } from '../../contexts/Farms'
import useAllStakedValue, { StakedValue } from '../../hooks/useAllStakedValue'
import { Main, Logo, CardList, CardWrapper } from './styled'

interface FarmWithStakedValue extends Farm, StakedValue {
  apy: BigNumber
}

const CHKNMenu: FC = () => {
  const { account } = useWallet()
  const [farms] = useFarms()
  const history = useHistory()
  const stakedValue = useAllStakedValue()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)

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
        <div>
          <Button onClick={onPresentWalletProviderModal}>
            <span>🔓</span> Unlock Wallet
          </Button>
        </div>
      </div>
    )
  }

  console.log('fams', farms, 'stakedValue', stakedValue)

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
        <H1>Select your spicy level</H1>
        <P>Earn CHKN token by staking Uniswap V2 LP tokens</P>
        <CardList>
          {rows.map((row) => {
            return (
              <CardWrapper>
                <Card
                  type="menu"
                  onCardClick={() => console.log('onCardClick')}
                  bottomText="APY"
                  bottomValue={''}
                  title={row.name}
                  subtitle={`Deposit ${row.lpToken} Earn CHKN`}
                  onBtnClick={() => history.push(`/menu/${row.id}`)}
                  isFooterVisible
                />
              </CardWrapper>
            )
          })}
        </CardList>
      </Main>
    </Container>
  )
}

export default CHKNMenu
