import React from 'react'
import { StyledLink, StyledListItem, StyledNavLink } from './styled'

export interface MenuItemProps {
  title: string
  to: string
  isNative?: boolean
  target?: string
}

const MenuItem: React.FC<MenuItemProps> = ({ title, to, isNative, target }) => {
  const renderNavLink = (title: string, to: string) => {
    return (
      <StyledNavLink exact to={to}>
        {title}
      </StyledNavLink>
    )
  }

  return (
    <StyledListItem key={title}>
      {isNative ? (
        <StyledLink target={target} href={to}>
          {title}
        </StyledLink>
      ) : (
        renderNavLink(title, to)
      )}
    </StyledListItem>
  )
}

export default MenuItem
