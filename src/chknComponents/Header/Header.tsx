import React, { useState } from 'react'
// import AccountModal from "components/AccountModal";
// import SwapModal from '../SwapModal'
import { DEFAULT_HEADER_NAVLINKS } from './constants'
import MenuItem, { MenuItemProps } from '../MenuItem'
import { StyledList, StyledNav, Logo } from './styled'
import Container from '../../chknComponents/Container'
import AccountButton from './components/AccountButton'

interface HeaderProps {
  menuItems?: Array<MenuItemProps>
}

const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => setIsModalVisible(true)
  const hideModal = () => setIsModalVisible(false)

  const renderNavLinks = () => {
    return menuItems.map((menuItem: MenuItemProps) => {
      return <MenuItem key={menuItem.to} {...menuItem} />
    })
  }

  return (
    <Container>
      <StyledNav>
        <Logo iconName="logo-header" />
        <StyledList>{renderNavLinks()}</StyledList>
        <div>
          <AccountButton />
        </div>
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
    </Container>
  )
}

export default Header

Header.defaultProps = {
  menuItems: DEFAULT_HEADER_NAVLINKS,
}
