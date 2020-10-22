import Icon from './../Icon'
import LangSelect from '../LangSelect'
import { MD, LG, RED } from './../../styledVars'
import styled, { css } from 'styled-components'

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

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
`

export const StyledLangSelect = styled.div`
  display: block;
  text-align: center;
  margin-top: 15px;
  cursor: pointer;
  @media (min-width: ${MD}) {
    margin-top: 0;
    position: absolute;
    right: 20px;
    top: 32px;
  }
`

export const StyledSpan = styled.span<{ active?: boolean }>`
  ${({ active }) =>
    active &&
    css`
      color: ${RED};
    `}

  &:hover {
    cursor: pointer;
    color: ${RED};
  }
`

export const StyledAuditContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: -10px;
`
export const StyledAuditText = styled.span`
  font-size: 12px;
  font-weight: 500;
  margin-right: 6px;
  margin-left: 15px;
`
