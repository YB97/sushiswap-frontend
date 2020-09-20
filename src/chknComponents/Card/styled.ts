import styled from "styled-components";
import { BORDER_BEIGE, DIMMED_BEIGE, LIGHT_BROWN, WHITE, FW_MEDIUM, FONT_PTMONO} from "../../styledVars";

export const StyledWrapper = styled.div`
  background-color: ${DIMMED_BEIGE};
  border: 1px solid ${BORDER_BEIGE};
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: inset 0px 2px 0px ${WHITE};
  width: 100%;
`

export const StyledBottomBlock = styled.div`
  border-top: 1px solid ${BORDER_BEIGE};
  display: flex;
  justify-content: space-between;
  color: ${LIGHT_BROWN};
  padding: 12px 20px;
`

export const StyledBottomValueWrapper = styled.div`
  font-weight: ${FW_MEDIUM};
`

export const StyledBottomValue = styled.span`
  margin-right: 5px;
  font-family: ${FONT_PTMONO};
  font-weight: bold;
`