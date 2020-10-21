import {
  BORDER_BEIGE,
  RED,
  WHITE,
  BLUE,
  SECONDARY_BLUE,
  FONT_POPPINS,
  YELLOW,
  GREEN,
} from './../../styledVars'
import styled, { css } from 'styled-components'
import { darken, lighten, rgba } from 'polished'

export const StyledButton = styled.button<{
  shape: string
  height?: string
  minWidth?: string
}>`
  font-family: ${FONT_POPPINS};
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.03em;
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  background-color: ${RED};
  color: ${WHITE};
  border: 0;
  width: 100%;
  height: ${({ height }) => height || '46px'};
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
    props.minWidth &&
    css`
      min-width: ${props.minWidth};
    `}

  ${(props) =>
    props.theme === 'blue' &&
    css`
      background-color: ${BLUE};
      color: white;
      &:hover {
        background-color: ${darken(0.1, BLUE)};
      }
    `}
  ${(props) =>
    props.theme === 'blue' &&
    css`
      background-color: ${BLUE};
      color: white;
      &:hover {
        background-color: ${darken(0.1, BLUE)};
      }
    `}
  ${(props) =>
    props.theme === 'light-blue' &&
    css`
      background-color: #edf4fa;
      border: 1px solid #dbe9f5;
      box-sizing: border-box;
      border-radius: 10px;
      color: ${SECONDARY_BLUE};
      &:hover {
        background-color: ${darken(0.1, '#EDF4FA')};
      }
      &:disabled {
        background-color: ${rgba('#EDF4FA', 0.7)};
        color: ${rgba(SECONDARY_BLUE, 0.7)};
        cursor: not-allowed;
        &:hover {
          background-color: ${rgba('#EDF4FA', 0.7)};
        }
      }
    `}
  
  ${(props) =>
    props.theme === 'yellow' &&
    css`
      background-color: ${YELLOW};
      color: white;
      &:hover {
        background-color: ${lighten(0.1, YELLOW)};
      }
    `}

  ${(props) =>
    props.theme === 'green' &&
    css`
      background-color: ${GREEN};
      color: white;
      &:hover {
        background-color: ${darken(0.1, GREEN)};
      }
    `}

  ${(props) =>
    props.theme === 'light-red' &&
    css`
      background-color: ${lighten(0.1, RED)};
      color: white;
      &:hover {
        background-color: ${lighten(0.05, RED)};
      }
    `}



  /* shape */

  ${({ shape }) => {
    return (
      shape === 'half-round' &&
      css`
        border-radius: 27px;
      `
    )
  }}

  ${({ shape }) =>
    shape === 'rect' &&
    css`
      border-radius: 5px;
    `}
`
