import styled from 'styled-components'
import { StyledPopupWrapper } from '../InviteModal/styled'
import Bg from '../../assets/img/popup-bg.png'
import { SM, LG } from '../../styledVars'

export const StyledWrapper = styled.div`
  padding: 43px 30px 130px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
`
export const StyledImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`

export const StyledText = styled.div`
  font-size: 19px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.03em;

  /* Gray */

  color: #828795;
  margin-bottom: 40px;
`

export const StyledBg = styled(StyledPopupWrapper)<{
  maxWidth?: string
  minHeight?: string
}>`
  background-size: contain;
  background-repeat: no-repeat;
  /* bottom: 0; */
  background-position: bottom;
  background-image: url(${Bg});
  min-height: ${({ minHeight }) => minHeight || '550px'};
  @media (min-width: ${SM}) {
    max-width: ${({ maxWidth }) => maxWidth || '862px'};
    min-height: ${({ minHeight }) => minHeight || '550px'};
    width: 85%;
  }

  @media (min-width: ${LG}) {
    max-width: ${({ maxWidth }) => maxWidth || '862px'};
    min-height: ${({ minHeight }) => minHeight || '550px'};
    width: 50%;
  }
`
