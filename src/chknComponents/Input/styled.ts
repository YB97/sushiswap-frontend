import styled from "styled-components";

export const StyledInput = styled.input`
  height: 44px;
  width: 100%;
  border: 1px solid $borderBeige;
  border-radius: 8px;
  padding: 15px;
  box-sizing: border-box;
  color: $brown;
  font-size: 14px;
  font-family: $fontPoppins;
  &:focus,
  &:active {
    outline: none;
  }

`

export const StyledTitle = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`
