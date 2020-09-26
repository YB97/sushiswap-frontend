import { FONT_POPPINS, FONT_SALSA, MD } from './../../styledVars'
import styled from 'styled-components'

export const StyledH1 = styled.h1`
  margin: 13px 0 8px 0;
  color: #222a3f;
  font-family: ${FONT_POPPINS};
  /* font-family: ${FONT_SALSA}; */
  font-size: 34px;
  font-weight: bold;

  @media (max-width: ${MD}) {
    font-size: 28px;
  }
`
