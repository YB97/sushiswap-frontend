import { LG, MD } from './../../styledVars'
import styled from 'styled-components'
import Button from '../../chknComponents/Button'
import AdBannerImagePng from '../../assets/img/magic-banner-img.png'
import AdBannerBg from '../../assets/img/background.png'
import { rgba } from 'polished'

export const StyledAdBanner = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  background-color: #e14646;
  background: url(${AdBannerBg}) center no-repeat;
  background-size: cover;
  border-radius: 15px;
  box-shadow: 0px 7px 30px rgba(55, 59, 70, 0.12);
  * {
    user-select: none;
  }
`

export const StyledAdBannerOverlay = styled.div`
  padding: 34px 47px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${rgba('#e14646', 0.93)};
  padding: 20px 17px;
  @media (min-width: ${MD}) {
    padding: 25px 37px;
  }
  @media (min-width: ${LG}) {
    padding: 34px 47px;
  }
`

export const AdBannerButtonSuffix = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
  span {
    font-weight: bold;
    color: #ffffff;
    font-size: 23px;
    line-height: 23px;
    text-align: center;
    @media (min-width: ${MD}) {
      text-align: left;
      font-size: 26px;
      line-height: 26px;
    }
    @media (min-width: ${LG}) {
      font-size: 30px;
      line-height: 27px;
    }
  }
`

export const StyledAdBannerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: ${LG}) {
    width: 70%;
  }
`
export const StyledAdBannerImageWrapper = styled.div`
  position: relative;
  max-height: 200px;
  width: 30%;
  height: 200px;
  display: none;
  @media (min-width: ${LG}) {
    display: flex;
    background: url('${AdBannerImagePng}') center no-repeat;
    background-size: contain;
  }
`

export const StyledAdBannerTitle = styled.div`
  display: block;
  font-style: normal;
  font-weight: bold;
  color: #ffffff;
  font-size: 20px;
  line-height: 30px;
  @media (min-width: ${MD}) {
    font-size: 26px;
    line-height: 36px;
  }
  @media (min-width: ${LG}) {
    font-size: 30px;
    line-height: 40px;
  }
`

export const StyledAdBannerSubtitle = styled.div`
  margin-top: 14px;
  display: block;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: #ffffff;
  opacity: 0.82;

  font-size: 14px;
  line-height: 24px;
  @media (min-width: ${MD}) {
    font-size: 16px;
    line-height: 26px;
  }
  @media (min-width: ${LG}) {
    font-size: 19px;
    line-height: 28px;
  }
`

export const StyledAdBannerButtonWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${MD}) {
    flex-direction: row;
  }
`

export const StyledAdBannerButton = styled(Button)`
  font-weight: bold;
  height: 50px;
  margin-bottom: 20px;
  font-size: 21px;
  line-height: 31px;
  letter-spacing: 0.02em;
  border-radius: 10px;
  color: #ffffff;
  width: 273px;
  @media (min-width: ${MD}) {
    margin-bottom: 0;
    margin-right: 35px;
  }
`
