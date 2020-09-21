import {
  FW_MEDIUM,
  LIGHT_BROWN,
  FONT_POPPINS,
  FW_SEMI_BOLD,
  RED,
  LIGHT_BEIGE,
  BORDER_BEIGE,
} from './../../../../styledVars'
import styled from 'styled-components'
import Button from '../../../Button'

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 25px 20px;
  padding-top: 65px;
`

export const StyledTitle = styled.div`
  margin-top: 10px;
  font-size: 22px;
  font-weight: bold;
`

export const StyledSubtitle = styled.div`
  margin-top: 5px;
  font-size: 16px;
  height: 32px;
  font-weight: ${FW_MEDIUM};
  color: ${LIGHT_BROWN};
  text-align: center;
`

export const StyledBtn = styled(Button)`
  font-family: ${FONT_POPPINS};
  font-size: 16px;
  font-weight: ${FW_SEMI_BOLD};
  margin-top: 37px;
  color: ${RED};
  background-color: ${LIGHT_BEIGE};
  border: 1px solid rgba(${BORDER_BEIGE}, 0.6);
  &:hover {
    background-color: darken(${LIGHT_BEIGE}, 2%);
  }
`

export const StyledAddBtn = styled(StyledBtn)`
  margin-top: 10px;
`

export const StyledImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  width: 108px;
  height: 108px;
  border-radius: 100%;
  background: #FFFFFF;
  box-shadow: 0px 8px 20px rgba(55, 59, 70, 0.19);
  border-radius: 66px;
`
