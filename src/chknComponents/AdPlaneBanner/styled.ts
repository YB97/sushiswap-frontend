import styled, { css } from 'styled-components'
// import OpenLockPng from '../../assets/img/open-lock.svg'
import OpenLockPng from '../../assets/img/lock.svg'

export const StyledAdPlaneBanner = styled.div`
  position: absolute;
  top: 20px;
  left: 50px;
  display: flex;
  width: 55%;
  flex-direction: column;
`

export const AdPlaneBannerHeader = styled.div`
  display: flex;
  align-items: center;
`

export const AdPlaneBannerText = styled.h2`
  display: block;
  font-weight: 800;
  font-size: 18px;
  line-height: 20px;
  color: #222a3f;
  margin-right: 15px;
  user-select: none;
  span {
    display: block;
    font-weight: 800;
    line-height: 28px;
    font-size: 30px;
    color: #222a3f;
    transform: rotate(1deg);
  }
`

export const AdPlaneBannerPrice = styled.span`
  display: block;
  white-space: nowrap;
  width: 300px;
  user-select: none;
  text-overflow: ellipsis;
  font-weight: bold;
  font-size: 44px;
  line-height: 75px;
  color: #219653;
`

export const AdPlaneBannerProgressBar = styled.div<{ isLock: boolean }>`
  user-select: none;
  display: block;
  width: 100%;
  position: relative;
  height: 14px;
  background: #d6e2fa;
  margin-top: -10px;
  border-radius: 16px;
  &::after {
    position: absolute;
    content: '';
    background: url(${OpenLockPng}) center no-repeat;
    background-size: 10px;
    background-color: #d6e2fa;
    display: inline-block;
    width: 24px;
    height: 24px;
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
export const AdPlaneBannerProgressBarActive = styled.div<{ progress: string }>`
  display: inline-block;
  width: ${({ progress }) => progress};
  height: 100%;
  background: #407aeb;
  border-radius: 16px;
`
