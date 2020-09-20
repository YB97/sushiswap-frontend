import { BORDER_BEIGE, FONT_SALSA, RED, WHITE } from './../../styledVars';
import styled from "styled-components";

export const StyledButton = styled.button`
  font-family: ${FONT_SALSA};
  font-size: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${RED};
  color: ${WHITE};
  border-radius: 8px;
  border: 0;
  width: 100%;
  height: 46px;
  outline: none;
  padding: 0 29px;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 0.15s linear;
  &:hover {
    background-color: darken(${RED}, 10%);
  }
  &:disabled {
    background-color: ${BORDER_BEIGE};
    cursor: not-allowed;
    &:hover {
      background-color: ${BORDER_BEIGE};
    }
  }
  img {
    height: 22px;
    width: 22px;
  }
`