import { FONT_SALSA, LIGHT_BROWN, RED } from './../../styledVars';
import styled, { css } from "styled-components";
import { NavLink } from 'react-router-dom';

export const StyledListItem = styled.li`
  margin-left: 55px;
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

const activeClassName = 'linkActive';
const link = css`
  font-family: ${FONT_SALSA};
  font-size: 16px;
  color: ${LIGHT_BROWN};
  text-decoration: none;
  transition: color 0.15s linear;
  &:hover {
    color: darken(${LIGHT_BROWN}, 10%);
  }
  &.${activeClassName} {
    color: ${RED};
    transition: color 0.15s linear;
    &:hover {
      color: darken(${LIGHT_BROWN}, 10%);
    }
  }
`

export const StyledNavLink = styled(NavLink).attrs({
  activeClassName: activeClassName
})`
  ${link}
`

export const StyledLink = styled.a`
  ${link}
`