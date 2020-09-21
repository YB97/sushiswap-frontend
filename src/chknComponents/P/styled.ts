import { FW_MEDIUM, MD, GRAY } from './../../styledVars';
import styled from "styled-components";

export const StyledP = styled.p`
  font-weight: ${FW_MEDIUM};
  font-size: 16px;
  color: ${GRAY};

  @media (max-width: ${MD}) {
    font-size: 14px;
  }
`