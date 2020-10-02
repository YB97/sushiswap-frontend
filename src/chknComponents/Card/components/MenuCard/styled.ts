import {
  FW_MEDIUM,
  LIGHT_BROWN,
  FONT_POPPINS,
  FW_SEMI_BOLD,
  LIGHT_BEIGE,
  BORDER_BEIGE,
  BLUE,
} from './../../../../styledVars'
import styled from 'styled-components'
import Button from '../../../Button'

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 25px 20px 15px 20px;
  padding-top: 65px;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 90%;
    height: 1px;
    margin: 0 auto;
    background-color: #d9e5e9;
  }
`

export const StyledTitle = styled.div`
  /* margin-top: 10px; */
  font-size: 20px;
  font-weight: bold;
`

export const StyledSubtitle = styled.div`
  margin-top: 7px;
  font-size: 14px;
  height: 32px;
  font-weight: ${FW_MEDIUM};
  color: ${LIGHT_BROWN};
  line-height: 21px;
  text-align: center;
`

export const StyledBtn = styled(Button)`
  font-family: ${FONT_POPPINS};
  margin-top: 25px;
  /* font-size: 16px;
  font-weight: ${FW_SEMI_BOLD};
  color: ${BLUE};
  background-color: ${LIGHT_BEIGE};
  border: 1px solid rgba(${BORDER_BEIGE}, 0.6);
  &:hover {
    background-color: darken(${BLUE}, 2%);
  } */
`

export const StyledAddBtn = styled(StyledBtn)`
  margin-top: 10px;
`

export const StyledImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  /* width: 150px;
  height: 130px; */
  /* border-radius: 100%; */
  /* background: #FFFFFF; */
  /* box-shadow: 0px 8px 20px rgba(55, 59, 70, 0.19); */
  /* border-radius: 66px; */
`

export const StyledHelpText = styled.div`
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
`
