import Icon from './../Icon'
import { MD, LG } from './../../styledVars'
import styled from 'styled-components'

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 23px 0;

  @media (max-width: ${MD}) {
    padding: 10px;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 375px) {
    flex-direction: column;
  }
`

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin-right: 30px;
  @media (max-width: ${MD}) {
    margin-right: 0;
  }
`

export const StyledMenuWrapper = styled.div`
  display: flex;
  @media (max-width: ${MD}) {
    margin-top: 20px;
    align-items: center;
    flex-direction: column;
  }
`

export const Logo = styled(Icon)`
  display: none;
  width: 150px;
  height: 48px;
  @media (min-width: ${LG}) {
    display: inline-block;
    width: 180px;
    height: 58px;
  }
`
export const StyledAccountButton = styled.div`
  margin-top: 30px;
  @media (min-width: ${MD}) {
    width: fit-content;
  }
  @media (min-width: ${LG}) {
    margin-top: 0;
  }
`;