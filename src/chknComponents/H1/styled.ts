import { FONT_SALSA, MD } from './../../styledVars';
import styled from "styled-components";

export const StyledH1 = styled.h1`
  margin: 13px 0 8px 0;
  color: #222A3F;
  font-family: ${FONT_SALSA};
  font-size: 37px;
  font-weight: normal;

  @media (max-width: ${MD}) {
    font-size: 28px;
  }
`