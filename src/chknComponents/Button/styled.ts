import { BORDER_BEIGE, FONT_SALSA, RED, WHITE, BLUE } from './../../styledVars'
import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const StyledButton = styled.button`
  font-family: ${FONT_SALSA};
  font-size: 17px;
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  background-color: ${RED};
  color: ${WHITE};
  border-radius: 27px;
  border: 0;
  width: 100%;
  height: 46px;
  outline: none;
  padding: 0 29px;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 0.15s linear;
  &:hover {
    background-color: ${darken(0.1, RED)};
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

  ${(props) =>
    props.theme === 'blue' &&
    css`
      background-color: ${BLUE};
      color: white;
      &:hover {
        background-color: ${darken(0.1, BLUE)};
      }
    `}
`
