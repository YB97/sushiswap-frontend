import styled from 'styled-components'

import Icon from '../../chknComponents/Icon'
import { MD } from './../../styledVars'

export const StyledAccount = styled.div`
  display: flex;
`
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled(Icon)`
  width: 93px;
  height: 104px;
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
  margin-bottom: 200px;

  @media (max-width: ${MD}) {
    justify-content: center;
  }
`

export const CardWrapper = styled.div`
  width: calc(33% - 10px);
  margin-right: 20px;
  margin-top: 20px;
  &:nth-child(3n) {
    margin-right: 0;
  }

  @media (max-width: $md) {
    padding: 0 10px;
    width: calc(50% - 10px);
    margin-right: 0;
    &:nth-child(2n) {
      margin-right: 0;
    }
    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media (max-width: $xs) {
    width: 100%;
  }
`
