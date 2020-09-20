import Icon from '../../../Icon';
import { BORDER_BEIGE, MD, LIGHT_BROWN } from './../../../../styledVars';
import styled from "styled-components";

export const StyledMainBlock = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 24px;
  padding: 24px 20px 24px 20px;
  border-bottom: 1px solid ${BORDER_BEIGE};
`

export const StyledTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: ${LIGHT_BROWN};
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
  margin-right: 18px;
`