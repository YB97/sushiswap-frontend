import { MD } from './../../styledVars';
import styled, { css } from 'styled-components'

import P from '../../chknComponents/P'
import Card from '../../chknComponents/Card'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;
`

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
`

export const CardWrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
  @media (min-width: ${MD}) {
    width: 320px;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  } 
`

export const CardItem = styled(Card)`
  height: ${({ hasAddBtn }) => (hasAddBtn ? '370px' : '330px')};
`
export const CardText = css`
  height: 40px;
`

export const Text = styled(P)`
  text-align: center;
`
