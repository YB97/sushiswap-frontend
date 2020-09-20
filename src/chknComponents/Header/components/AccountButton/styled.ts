import styled from "styled-components";
import { CHOCOLATE, MD, YELLOW } from "../../../../styledVars";
import Button from '../../../Button'

export const StyledUnclockButton = styled(Button)`
  height: 38px;
  background-color: ${CHOCOLATE};
  color: ${YELLOW};
  font-size: 16px;
  &:hover {
    background-color: darken(0.1, ${CHOCOLATE});
  }

  @media (max-width: ${MD}) {
    font-size: 14px;
  }
`