import { FONT_POPPINS, LG, MD, SM } from './../../styledVars'
import styled from 'styled-components'
import { rgba, darken } from 'polished'

export const StyledOverlay = styled.div`
  padding: 30px 0;
  position: fixed;
  overflow: scroll;
  display: flex;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${rgba('#1C1D24', 0.53)};
`

export const StyledPopupWrapper = styled.main<{ isPromo?: boolean }>`
  margin: auto;
  position: relative;
  display: flex;
  background: #ffffff;
  border-radius: 22px;
  width: 98%;

  @media (min-width: ${SM}) {
    max-width: 862px;
    min-height: ${({ isPromo }) => (isPromo ? '550px' : '650px')};
    width: 85%;
  }

  @media (min-width: ${LG}) {
    max-width: 862px;
    min-height: ${({ isPromo }) => (isPromo ? '550px' : '650px')};
    width: 50%;
  }
`

export const StyledPopup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const StyledPopupHeader = styled.div`
  position: relative;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`

export const StyledPopupHeaderImage = styled.div`
  display: none;
  position: relative;
  width: 50%;
  height: 100%;
  .popup-header__image-wrapper {
    position: absolute;
    display: block;
    width: 90%;
    height: 90%;
    bottom: 0;
    right: 0;
  }
  img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${SM}) {
    display: flex;
  }
`

export const StyledPopupHeaderContent = styled.div`
  display: block;
  padding: 15px 30px 20px;
  width: 100%;
  h3 {
    display: block;
    font-weight: bold;
    font-size: calc(1rem + ((1vw - 7.68px) * 0.3472));
    line-height: 25px;
    letter-spacing: 0.03em;
    color: #222a3f;
  }

  p {
    white-space: nowrap;
    margin-top: 4px;
    display: block;
    font-weight: normal;
    font-size: calc(0.75rem + ((1vw - 3.75px) * 0.1942));
    line-height: 22px;
    letter-spacing: 0.03em;
    color: #828795;
  }

  span {
    margin-top: 5px;
    display: block;
    font-weight: 600;
    font-size: calc(0.75rem + ((1vw - 3.75px) * 0.1942));
    line-height: 22px;
    text-align: left;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #828795;
  }

  @media (min-width: ${SM}) {
    width: 50%;
    span {
      margin-top: 12px;
    }
  }
`

export const StyledPopupClickBoard = styled.div`
  margin-top: 8px;
  display: block;
  align-items: center;
  justify-content: center;
  padding: 16px 15px;
  background: ${rgba('#F9FAFF', 0.66)};
  border: 2px dashed #ffffff;
  border-radius: 3px;
  text-overflow: ellipsis;
  width: 275px;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;

  font-weight: bold;
  font-size: 14px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #222a3f;

  user-select: none;
  cursor: pointer;
`

export const StyledPopupContentWrapper = styled.div`
  padding: 28px 24px 28px 38px;
  p {
    margin-top: 20px;
    display: block;
    font-weight: normal;
    font-size: calc(0.875rem + ((1vw - 3.75px) * 0.2589));
    line-height: 20px;
    letter-spacing: 0.03em;
    color: #828795;
    &:first-child {
      margin-top: 0;
    }
  }
`

export const StyledPopupFooter = styled.footer`
  padding: 0 30px 25px 38px;
  position: relative;
  display: flex;
  align-items: center;
  span {
    display: block;
    font-style: italic;
    font-weight: 500;
    font-size: calc(0.75rem + ((1vw - 3.75px) * 0.2589));
    line-height: 22px;
    letter-spacing: 0.03em;
    color: #828795;
  }

  h2 {
    font-weight: bold;
    font-size: calc(1.875rem + ((1vw - 3.75px) * 0.9709));
    line-height: 50px;
    letter-spacing: 0.03em;
    color: #222a3f;
  }
`

export const StyledPopupFooterButtonWrapper = styled.div`
  display: block;
  width: 50%;

  @media (min-width: ${SM}) {
    width: 40%;
  }
`

export const StyledPopupFooterTextWrapper = styled.div`
  margin-left: 20px;
`

export const StyledPopupFooterLink = styled.a`
  position: absolute;
  display: block;
  text-decoration: none;
  bottom: 30px;
  right: 30px;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.03em;
  color: #476bea;
  &:hover {
    color: ${darken(0.1, '#476BEA')};
  }
`
export const StyledRulesHeader = styled.div`
  font-weight: bold;
  font-size: 18px;
  font-family: ${FONT_POPPINS};
  color: #828795;
  margin-bottom: 20px;
`

export const StyledRulesText = styled.div`
  font-size: 16px;
  font-family: ${FONT_POPPINS};
  color: #828795;
  margin-bottom: 60px;
`

export const StyledBannerText = styled.div`
  font-size: 40px;
  color: #2f80ed;
  font-weight: bold;
  line-height: 60px;
`
