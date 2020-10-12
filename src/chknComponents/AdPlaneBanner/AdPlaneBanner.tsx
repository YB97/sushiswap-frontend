import React from 'react'
import {
  StyledAdPlaneBanner,
  AdPlaneBannerProgressBarActive,
  AdPlaneBannerProgressBar,
  AdPlaneBannerPrice,
  AdPlaneBannerHeader,
  AdPlaneBannerText,
} from './styled'

const AdPlaneBanner = () => {
  return (
    <StyledAdPlaneBanner>
      <AdPlaneBannerHeader>
        <AdPlaneBannerText>
          <span>REFERRAL</span>BONUS POOL
        </AdPlaneBannerText>
        <AdPlaneBannerPrice>$25,000</AdPlaneBannerPrice>
      </AdPlaneBannerHeader>
      <AdPlaneBannerProgressBar isLock={false}>
        <AdPlaneBannerProgressBarActive />
      </AdPlaneBannerProgressBar>
    </StyledAdPlaneBanner>
  )
}

export default AdPlaneBanner
