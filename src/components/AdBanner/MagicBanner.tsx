import React from 'react'
import {
  StyledAdBanner,
  AdBannerButtonSuffix,
  StyledAdBannerImageWrapper,
  StyledAdBannerContent,
  StyledAdBannerTitle,
  StyledAdBannerSubtitle,
  StyledAdBannerButtonWrapper,
  StyledAdBannerButton,
  StyledAdBannerOverlay
} from './styled'

const AdBanner = ({ onClick }) => {
  return (
    <StyledAdBanner>
      <StyledAdBannerOverlay>
        <StyledAdBannerContent>
          <StyledAdBannerTitle>
            Stake your CHKN for a piece of the 10% Referral Bonus Pool rewards!
          </StyledAdBannerTitle>
          <StyledAdBannerSubtitle>
            10% of all Referral Bonus Pool rewards go to stakers of CHKN. The
            more CHKN you have staked continuously, the more you earn from the
            pool when it's unlocked
          </StyledAdBannerSubtitle>

          <StyledAdBannerButtonWrapper>
            <StyledAdBannerButton theme="yellow" shape="rect" onClick={onClick}>
              Stake CHKN
            </StyledAdBannerButton>
            <AdBannerButtonSuffix>
              <span>2,838 CHKN</span> you staked so far
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
