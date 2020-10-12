import styled, { css } from 'styled-components'
import OpenLockPng from '../../assets/img/open-lock.svg'

export const StyledAdPlaneBanner = styled.div`
  position: 10px;
  display: flex;
  width: 40%;
  flex-direction: column;
`

export const AdPlaneBannerHeader = styled.div`
  display: flex;
`

export const AdPlaneBannerText = styled.h2`
  display: block;
  font-weight: 800;
  font-size: 27px;
  line-height: 27px;
  color: #222a3f;
  margin-right: 15px;
  span {
    display: block;
    font-weight: 800;
    line-height: 42px;
    font-size: 42px;
    color: #222a3f;
  }
`

export const AdPlaneBannerPrice = styled.span`
  display: block;
  white-space: nowrap;
  width: 300px;
  text-overflow: ellipsis;
  font-weight: bold;
  font-size: 50px;
  line-height: 75px;
  color: #219653;
`

export const AdPlaneBannerProgressBar = styled.div<{ isLock: boolean }>`
  display: block;
  width: 100%;
  position: relative;
  height: 24px;
  background: #d6e2fa;
  border-radius: 16px;
  &::after {
    position: absolute;
    content: '';
    background: url(${OpenLockPng}) center no-repeat;
    background-size: 18px;
    background-color: #d6e2fa;
    display: inline-block;
    width: 34px;
    height: 34px;
    border-radius: 100%;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);

    ${(props) =>
      props.isLock &&
      css`
        background: url('') center no-repeat;
      `}
  }
`
export const AdPlaneBannerProgressBarActive = styled.div`
  display: inline-block;
  width: 30%;
  height: 100%;
  background: #407aeb;
  border-radius: 16px;
`
