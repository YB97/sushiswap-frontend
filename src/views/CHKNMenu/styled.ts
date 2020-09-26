import styled from 'styled-components'

import Icon from '../../chknComponents/Icon'
import { MD, XS } from './../../styledVars'

export const StyledAccount = styled.div`
  display: flex;
`
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 130px;
`

export const Logo = styled(Icon)`
  width: 107px;
  height: 120px;
  @media (max-width: ${MD}) {
    width: 60px;
    height: 94px;
  }
`

export const CardList = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 200px;

  @media (min-width: ${MD}) {
  }
`

export const CardWrapper = styled.div`
  width: calc(24.5% - 10px);
  margin-right: 14px;
  margin-top: 80px;
  &:nth-child(4n) {
    margin-right: 0;
  }

  @media (max-width: ${MD}) {
    padding: 0 10px;
    width: calc(48% - 10px);
    margin-right: 0;
    &:nth-child(2n) {
      margin-right: 0;
    }
    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media (max-width: ${XS}) {
    width: 100%;
  }
`

export const UnlockButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
`
