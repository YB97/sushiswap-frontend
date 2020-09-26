import Icon from '../../chknComponents/Icon'
import Card from '../../chknComponents/Card'
import P from '../../chknComponents/P'
import styled from 'styled-components'
import Button from '../../chknComponents/Button'
import { MD } from './../../styledVars'

export const LogoLarge = styled(Icon)`
  width: 110px;
  height: 110px;
  @media (min-width: ${MD}) {
    width: 162px;
    height: 167px;
  }
`

export const Text = styled(P)`
  color: #545b6d;
  @media (max-width: ${MD}) {
    font-size: 14px;
    text-align: center;
    padding: 0 10px;
  }
`

export const Main = styled.main`
  padding: 10px 0 60px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${MD}) {
    padding-bottom: 45px;
  }
`

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;

  @media (min-width: 1600px) {
    margin-bottom: 35px;
  }

  @media (min-width: ${MD}) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }
`

export const StyledCard = styled(Card)`
  /* display: block; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-right: 0;
  margin-top: 20px;
  padding: 0 10px;
  min-height: 150px;
  &:first-child {
    margin-top: 0;
  }

  @media (min-width: ${MD}) {
    width: 394px;
    margin-right: 45px;
    margin-top: 0;
    &:last-child {
      margin-right: 0;
    }
  }
`

export const Img = styled.img`
  height: 22px;
  width: 22px;
  margin-right: 10px;
  @media (max-width: ${MD}) {
    height: 16px;
    width: 16px;
  }
`

export const StyledButton = styled(Button)`
  box-shadow: 0px 7px 30px rgba(55, 59, 70, 0.2);
  @media (max-width: ${MD}) {
    font-size: 14px;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  width: auto;
  justify-content: center;
`

export const StyledButtonWrap = styled.div`
  width: 160px;
  margin-left: 18px;
  &:first-child {
    margin-left: 0;
  }
`
