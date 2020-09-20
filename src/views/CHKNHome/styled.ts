import Icon from '../../chknComponents/Icon';
import Card from '../../chknComponents/Card';
import P from '../../chknComponents/P';
import styled from "styled-components";
import Button from '../../chknComponents/Button';
import { MD } from './../../styledVars';

export const LogoLarge = styled(Icon)`
  width: 222px;
  height: 227px;
  @media (max-width: ${MD}) {
    width: 150px;
    height: 150px;
  }
`

export const Text = styled(P)`
  @media (max-width: ${MD}) {
    font-size: 14px;
    text-align: center;
    padding: 0 10px;
  }
`

export const Main = styled.main`
  padding-top: 45px;
  padding-bottom: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: ${MD}) {
    padding-top: 40px;
    padding-bottom: 60px;
  }
`

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
`

export const CardList = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 55px;
  @media (max-width: ${MD}) {
    flex-direction: column;
    width: 100%;
    margin-bottom: 40px;
  }
`

export const StyledCard = styled(Card)`
  width: 394px;
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }

  @media (max-width: ${MD}) {
    width: 100%;
    margin-right: 0;
    margin-top: 20px;
    padding: 0 10px;
    &:first-child {
      margin-top: 0;
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
  width: 160px;
  margin-right: 18px;
  &:last-child() {
    margin-right: 0;
  }
  @media (max-width: ${MD}) {
    font-size: 14px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  width: auto;
  justify-content: center
`;
