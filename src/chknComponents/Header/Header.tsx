import React, { useState, useContext } from 'react'
// import AccountModal from "components/AccountModal";
// import SwapModal from '../SwapModal'
import { DEFAULT_HEADER_NAVLINKS } from './constants'
import MenuItem, { MenuItemProps } from '../MenuItem'
import {
  StyledList,
  StyledNav,
  Logo,
  StyledMenuWrapper,
  StyledLangSelect,
  StyledAccountButton,
  StyledSpan,
} from './styled'
import Container from '../../chknComponents/Container'
import AccountButton from './components/AccountButton'
import { LangContext } from '../../contexts/Lang'
import LangSelect from '../LangSelect'

interface HeaderProps {
  menuItems?: Array<MenuItemProps>
}

const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const { messages, lang, onSetLang } = useContext(LangContext)

  const showModal = () => setIsModalVisible(true)
  const hideModal = () => setIsModalVisible(false)

  const renderNavLinks = () => {
    return menuItems.map((menuItem: MenuItemProps) => {
      return <MenuItem key={menuItem.to} {...menuItem} />
    })
  }

  const onLangLabelClick = (bindedLang) => {
    onSetLang(bindedLang)
  }

  return (
    <Container>
      <StyledNav>
        <Logo iconName="logo-header" />
        <StyledMenuWrapper>
          <StyledList>{renderNavLinks()}</StyledList>
          <StyledAccountButton>
            <AccountButton />
          </StyledAccountButton>
          {/* <StyledAccountButton /> */}
        </StyledMenuWrapper>
        {/* <SwapModal
        visible={isModalVisible}
        onCancel={hideModal}
        onClose={hideModal}
      /> */}
        {/* <AccountModal
        balance="1.000"
        visible={isModalVisible}
        onCancel={hideModal}
        onClose={hideModal}
        onViewEther={() => console.log("onViewEther")}
        onSignOut={() => console.log("onSignOut")}
      /> */}
      </StyledNav>
      <StyledLangSelect>
        {/* <LangSelect /> */}
        <StyledSpan
          active={'EN' === lang}
          onClick={onLangLabelClick.bind(null, 'EN')}
        >
          EN
        </StyledSpan>{' '}
        {' / '}
        <StyledSpan
          active={'CN' === lang}
          onClick={onLangLabelClick.bind(null, 'CN')}
        >
          CN
        </StyledSpan>
      </StyledLangSelect>
    </Container>
  )
}

export default Header

Header.defaultProps = {
  menuItems: DEFAULT_HEADER_NAVLINKS,
}
