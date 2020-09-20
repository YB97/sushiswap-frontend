import { FW_MEDIUM, LIGHT_BROWN, MD } from './../../styledVars';
import styled from "styled-components";

export const StyledP = styled.p`
  font-weight: ${FW_MEDIUM};
  font-size: 16px;
  color: ${LIGHT_BROWN};

  @media (max-width: ${MD}) {
    font-size: 14px;
  }
`