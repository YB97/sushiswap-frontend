import { darken } from 'polished'
import { RED, GRAY, FONT_POPPINS, XL } from './../../styledVars'
import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledListItem = styled.li`
  margin-left: 30px;
  &:first-child {
    margin-left: 0;
  }

  @media (max-width: $md) {
    margin-left: 15px;
    &:first-child {
      margin-left: 0;
    }
  }
`

const activeClassName = 'linkActive'
const link = css`
  font-family: ${FONT_POPPINS};
  font-size: 16px;
  color: ${GRAY};
  text-decoration: none;
  transition: color 0.15s linear;
  font-weight: 600;
  &:hover {
    color: ${darken(0.1, GRAY)};
  }
  &.${activeClassName} {
    color: ${RED};
    transition: color 0.15s linear;
    &:hover {
      color: ${RED};
    }
  }

  @media (min-width: 1600px) {
    font-size: 16px;
  }

  @media (min-width: ${XL}) {
    font-size: 14px;
  }
`

export const StyledNavLink = styled(NavLink).attrs({
  activeClassName: activeClassName,
})`
  ${link}
`

export const StyledLink = styled.a<{ fontSize?: string; margin?: string }>`
  ${link}
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}`}
  ${({ margin }) => margin && `margin: ${margin}`}
`
