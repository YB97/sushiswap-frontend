import React, { useContext } from 'react'
import { StyledLink, StyledListItem, StyledNavLink } from './styled'
import { LangContext } from '../../contexts/Lang'



export interface MenuItemProps {
  title: string
  to: string
  isNative?: boolean
  target?: string
}

const MenuItem: React.FC<MenuItemProps> = ({ title, to, isNative, target }) => {
  const { messages } = useContext(LangContext);
  const renderNavLink = (title: string, to: string) => {
    return (
      <StyledNavLink exact to={to}>
        {messages.navbar[title]}
      </StyledNavLink>
    )
  }

  return (
    <StyledListItem key={title}>
      {isNative ? (
        <StyledLink target={target} href={to}>
          {messages.navbar[title]}
        </StyledLink>
      ) : (
        renderNavLink(title, to)
      )}
    </StyledListItem>
  )
}

export default MenuItem
