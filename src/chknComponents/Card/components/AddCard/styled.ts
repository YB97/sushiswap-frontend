import styled from 'styled-components'
import { FONT_POPPINS } from '../../../../styledVars'

export const StyledIconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 108px;
  height: 108px;
  border-radius: 100%;
  background: #ffffff;
  box-shadow: 0px 8px 20px rgba(55, 59, 70, 0.19);
  border-radius: 66px;

  svg {
    height: 56px;
    width: 56px;
  }
`

export const StyledWrapper = styled.div`
  position: relative;
  /* display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center; */
  padding: 25px 20px 15px 20px;
  box-sizing: border-box;
  min-height: 260px;
  cursor: pointer;
  /* &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 90%;
    height: 1px;
    margin: 0 auto;
    background-color: #d9e5e9;
  } */
`
export const StyledTitle = styled.div`
  /* margin-top: 10px; */
  margin-top: 40px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`

export const StyledSubtitle = styled.div`
  font-family: ${FONT_POPPINS};
  font-style: italic;
  font-weight: 500;
  font-size: 13px;
  line-height: 21px;
  color: #2f80ed;
  margin-top: 10px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.03em;
`

export const StyledText = styled.div`
  font-weight: 500;
  font-size: 12x;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.03em;
  margin-top: 20px;

  /* Gray */

  color: #828795;
`
