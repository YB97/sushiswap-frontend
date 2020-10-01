import React, { useCallback, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useWallet, UseWalletProvider } from 'use-wallet'
import DisclaimerModal from './components/DisclaimerModal'
import MobileMenu from './components/MobileMenu'

import TopBar from './components/TopBar'
import FarmsProvider from './contexts/Farms'
import ModalsProvider from './contexts/Modals'
import TransactionProvider from './contexts/Transactions'
import SushiProvider from './contexts/SushiProvider'
import useModal from './hooks/useModal'
import theme from './theme'
import Stake from './views/Stake'
import CHKNHome from './views/CHKNHome'
import CHKNAbout from './views/CHKNAbout'
import CHKNMenuItem from './views/CHKNMenuItem'
import Header from './chknComponents/Header'
import CHKNMenu from './views/CHKNMenu'
import useSushi from './hooks/useSushi'
import useTokenBalance from './hooks/useTokenBalance'
import { getSushiAddress } from './sushi/utils'
import { getBalanceNumber } from './utils/formatBalance'
import CHKNBackground from './views/CHKNBackground'

const App: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const [showChicks, setShowChicks] = useState(false)

  setTimeout(() => {
    window.requestAnimationFrame(() => setShowChicks(true))
  }, 2000)

  const handleDismissMobileMenu = useCallback(() => {
    setMobileMenu(false)
  }, [setMobileMenu])

  const handlePresentMobileMenu = useCallback(() => {
    setMobileMenu(true)
  }, [setMobileMenu])

  return (
    <Providers>
      <Router>
        <CHKNBackground>
          {/* <TopBar onPresentMobileMenu={handlePresentMobileMenu} /> */}
          {/* <MobileMenu onDismiss={handleDismissMobileMenu} visible={mobileMenu} /> */}
          <Header />
          <Switch>
            <Route path="/stake" exact>
              {/* <Farms /> */}
              <CHKNMenu />
              {/* <Farms /> */}
            </Route>
            <Route exact path="/stake/:id">
              <CHKNMenuItem />
            </Route>
            <Route path="/about" exact>
              <CHKNAbout />
            </Route>
            <Route path="/staking" exact>
              <Stake />
            </Route>
            <Route path="/" exact>
              <CHKNHome />
            </Route>
            <Route path="*">
              <CHKNHome />
            </Route>
          </Switch>
        </CHKNBackground>
      </Router>
      <Disclaimer />
    </Providers>
  )
}

const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <UseWalletProvider
        // chainId={4}
        chainId={1}
        connectors={{
          walletconnect: { rpcUrl: 'https://mainnet.eth.aragon.network/' },
        }}
      >
        <SushiProvider>
          <TransactionProvider>
            <FarmsProvider>
              <ModalsProvider>{children}</ModalsProvider>
            </FarmsProvider>
          </TransactionProvider>
        </SushiProvider>
      </UseWalletProvider>
    </ThemeProvider>
  )
}

const Disclaimer: React.FC = () => {
  const markSeen = useCallback(() => {
    localStorage.setItem('disclaimer', 'seen')
  }, [])

  const [onPresentDisclaimerModal] = useModal(
    <DisclaimerModal onConfirm={markSeen} />,
  )

  useEffect(() => {
    const seenDisclaimer = true // localStorage.getItem('disclaimer')
    if (!seenDisclaimer) {
      onPresentDisclaimerModal()
    }
  }, [onPresentDisclaimerModal])

  return <div />
}

export default App
