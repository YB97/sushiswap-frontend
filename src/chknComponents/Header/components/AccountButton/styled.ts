import styled from 'styled-components'
import { CHOCOLATE, MD, WHITE, YELLOW, RED} from '../../../../styledVars'
import Button from '../../../Button'
import { darken } from 'polished';

export const StyledUnclockButton = styled(Button)`
  background-color: ${RED};
  color: ${WHITE};
  &:hover {
    background-color: ${darken(0.1, RED)};
  }

  @media (max-width: ${MD}) {
    font-size: 14px;
  }
`
