import Icon from '../../../Icon';
import { BORDER_BEIGE, MD, LIGHT_BROWN, GRAY } from './../../../../styledVars';
import styled from "styled-components";

export const StyledMainBlock = styled.div`
  display: flex;
  border-bottom: 1px solid #D9E5E9;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
  padding: 30px 26px 30px 25px;
`

export const StyledTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: ${GRAY};
  margin-bottom: 5px;
  @media (max-width: ${MD}) {
    font-size: 14px;
  }
`;

export const StyledValue = styled.div`
  font-weight: bold;
  font-size: 28px;
  @media (max-width: ${MD}) {
    font-size: 24px;
  }
`

export const StyledIcon = styled(Icon) `
  width: 63px;
  height: 60px;
`