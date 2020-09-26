import Icon from '../../../Icon'
import { BORDER_BEIGE, MD, LIGHT_BROWN, GRAY } from './../../../../styledVars'
import styled from 'styled-components'

export const StyledMainBlock = styled.div`
  display: flex;
  /* border-bottom: 1px solid #d9e5e9; */
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
  padding: 20px 22px 20px 21px;
`

export const StyledTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: ${GRAY};
  margin-bottom: 10px;
  /* @media (max-width: ${MD}) {
    font-size: 14px;
  } */
`

export const StyledValue = styled.div`
  font-weight: bold;
  font-size: 26px;
  /* @media (max-width: ${MD}) {
    font-size: 26px;
  } */
`

export const StyledIcon = styled(Icon)`
  width: 63px;
  height: 60px;
`
