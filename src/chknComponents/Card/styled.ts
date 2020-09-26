import styled from 'styled-components'
import { WHITE, FW_MEDIUM, FONT_PTMONO, GRAY } from '../../styledVars'

export const StyledWrapper = styled.div`
  position: relative;
  background-color: ${WHITE};
  box-sizing: border-box;
  width: 100%;
  box-shadow: 0px 7px 30px rgba(55, 59, 70, 0.12);
  border-radius: 20px;
`

export const StyledBottomBlock = styled.div<{ isInfo?: boolean }>`
  display: flex;
  justify-content: space-between;
  color: ${GRAY};
  padding: 15px 20px;
  ${({ isInfo }) => isInfo && 'border-top: 1px solid #d9e5e9'}
`

export const StyledBottomValueWrapper = styled.div`
  font-weight: ${FW_MEDIUM};
  color: #222a3f;
`

export const StyledBottomValue = styled.span`
  margin-right: 5px;
  font-family: ${FONT_PTMONO};
  font-weight: bold;
`
