import Icon from './../Icon'
import { CHOCOLATE, YELLOW, MD } from './../../styledVars'
import Button from './../Button'
import styled from 'styled-components'

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 23px 0;

  @media (max-width: $md) {
    padding: 10px;
  }

  @media (max-width: 375px) {
    flex-direction: column;
  }
`

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
`

export const Logo = styled(Icon)`
  width: 180px;
  height: 58px;

  @media (max-width: $md) {
    width: 150px;
    height: 48px;
  }
`
