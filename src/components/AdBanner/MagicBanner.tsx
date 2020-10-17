import React, { useContext } from 'react'
import { LangContext } from '../../contexts/Lang'
import {
  StyledAdBanner,
  AdBannerButtonSuffix,
  StyledAdBannerImageWrapper,
  StyledAdBannerContent,
  StyledAdBannerTitle,
  StyledAdBannerSubtitle,
  StyledAdBannerButtonWrapper,
  StyledAdBannerButton,
  StyledAdBannerOverlay,
} from './styled'

const AdBanner = ({ onClick }) => {
  const { messages } = useContext(LangContext)
  return (
    <StyledAdBanner>
      <StyledAdBannerOverlay>
        <StyledAdBannerContent>
          <StyledAdBannerTitle>
            {messages.stake.banner.title}
          </StyledAdBannerTitle>
          <StyledAdBannerSubtitle>
            {messages.stake.banner.subtitle}
          </StyledAdBannerSubtitle>

          <StyledAdBannerButtonWrapper>
            <StyledAdBannerButton theme="yellow" shape="rect" onClick={onClick}>
              {messages.stake.banner.button}
            </StyledAdBannerButton>
            <AdBannerButtonSuffix>
              <span>0 CHKN</span> {messages.stake.banner.stacked}
            </AdBannerButtonSuffix>
          </StyledAdBannerButtonWrapper>
        </StyledAdBannerContent>
        {/* <img src="../../assets/img/ad-banner-img.png" alt=""/> */}
        <StyledAdBannerImageWrapper />
      </StyledAdBannerOverlay>
    </StyledAdBanner>
  )
}

export default AdBanner
