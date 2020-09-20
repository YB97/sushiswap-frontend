import { BORDER_BEIGE, FONT_POPPINS, FW_SEMI_BOLD, LIGHT_BEIGE, LIGHT_BROWN, RED, FONT_PTMONO } from './../../styledVars';
import styled from "styled-components";
import Button from "../Button";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const StyledHeader = styled.div`
  font-size: 18px;
  font-family: ${FONT_POPPINS};
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`

export const StyledIcon = styled.img`
  height: 100px;
  width: 100px;
`

export const StyledBalanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 50px;
`

export const StyledBalance = styled.div`
  font-size: 30px;
  font-family: ${FONT_PTMONO};
  font-weight: bold;
`

export const StyledBalanceDesc = styled.div`
  margin-top: 5px;
  font-size: 16px;
  color: ${LIGHT_BROWN};
`

export const StyledButton = styled(Button)`
  font-family: ${FONT_POPPINS};
  font-size: 16px;
  font-weight: ${FW_SEMI_BOLD};
  margin-bottom: 15px;
  color: ${RED};
  background-color: ${LIGHT_BEIGE};
  border: 1px solid rgba(${BORDER_BEIGE}, 0.6);
  &:hover {
    background-color: darken(${LIGHT_BEIGE}, 2%);
  }
`