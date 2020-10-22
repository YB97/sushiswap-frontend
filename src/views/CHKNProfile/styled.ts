import styled, { css } from 'styled-components'
import OpenLockPng from '../../assets/img/lock.svg'
import Icon from '../../chknComponents/Icon'
import { GRAY, LG, MD, SM, XL } from '../../styledVars'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const PaperWrapper = styled.div`
  margin-top: 80px;
  width: 70%;
  margin-bottom: 350px;
  /* height: 974px; */

  @media (max-width: ${XL}) {
    width: 80%;
  }
  @media (max-width: ${LG}) {
    width: 90%;
    margin-bottom: 250px;
  } ;
`
export const Paper = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  @media (max-width: ${SM}) {
    flex-direction: column;
  } ;
`

export const Item = styled.div<{ hasLeftBorder?: boolean }>`
  flex-basis: 50%;
  width: 50%;
  padding: 30px 36px;
  box-sizing: border-box;
  ${({ hasLeftBorder }) => hasLeftBorder && `border-left: 1px solid #DADEE4;`}

  @media (max-width: ${SM}) {
    width: 100%;
    flex-basis: 100%;
    border-left: none;
  } ;
`

export const Title = styled.div`
  font-weight: 600;
  font-size: 26px;
  line-height: 40px;
  color: #222a3f;

  @media (max-width: ${XL}) {
    font-size: 20px;
    line-height: 36px;
  } ;
`

export const LargeNumber = styled.div`
  font-weight: bold;
  font-size: 42px;
  line-height: 45px;
  color: #3a3028;

  @media (max-width: ${XL}) {
    font-size: 36px;
    line-height: 40px;
  } ;
`

export const SectionWrapper = styled.div`
  margin-top: 25px;
`

export const Text = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  color: #828795;

  @media (max-width: ${XL}) {
    font-size: 16px;
    line-height: 26px;
  }

  @media (max-width: ${LG}) {
    font-size: 14px;
    line-height: 20px;
  } ;
`

export const PoolPrice = styled.span<{
  isBlackColor?: boolean
  fontSize?: string
}>`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: bold;
  font-size: ${({ fontSize }) => fontSize || '38px'};
  line-height: 45px;
  color: ${({ isBlackColor }) => (isBlackColor ? '#222A3F' : '#407aeb')};
  @media (max-width: ${XL}) {
    font-size: ${({ fontSize }) => fontSize || '32px'};
    line-height: 40px;
  } ;
`

export const ProgressBar = styled.div<{ isLock: boolean }>`
  margin: 5px 0;
  display: block;
  width: 70%;
  position: relative;
  height: 14px;
  background: #d6e2fa;
  border-radius: 16px;
  &::after {
    position: absolute;
    content: '';
    background: url(${OpenLockPng}) center no-repeat;
    background-size: 12px;
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
export const ProgressBarActive = styled.div<{ progress?: string }>`
  display: inline-block;
  width: ${({ progress }) => progress || '30%'};
  height: 100%;
  background: #407aeb;
  border-radius: 16px;
`

interface FlexBoxProps {
  alignItems?: string
  justifyContent?: string
  margin?: string
  flexDirection?: string
  width?: string
  addMedia?: boolean
}

export const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({ addMedia }) =>
    addMedia &&
    css`
      @media (max-width: ${MD}) {
        flex-direction: column;
        align-items: flex-start;
      }
    `}
`
export const ProgressNumber = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #828795;
  margin-left: 15px;

  @media (max-width: ${XL}) {
    font-size: 18px;
    line-height: 20px;
  }
  @media (max-width: ${LG}) {
    font-size: 14px;
    line-height: 18px;
  } ;
`

export const SecondaryText = styled.div`
  margin-left: 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #a3abbf;

  @media (max-width: ${XL}) {
    font-size: 16px;
    line-height: 28px;
  }

  @media (max-width: ${MD}) {
    font-size: 14px;
    line-height: 20px;
    margin-left: 0;
  } ;
`

export const InviteLink = styled.div`
  margin-top: 5px;
  background: #fbf1f1;
  border: 2px dashed #decaca;
  border-radius: 8px;
  width: 100%;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.04em;
  padding: 14px 5px;
  height: 60px;
  box-sizing: border-box;
  color: #e14646;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: ${XL}) {
    font-size: 16px;
    line-height: 25px;
  }
  @media (max-width: ${MD}) {
    font-size: 14px;
    width: 260px;
  }
  @media (max-width: ${SM}) {
    width: 100%;
  } ;
`
export const StakeButton = styled.div`
  width: 60%;
  @media (max-width: ${MD}) {
    width: 100%;
  } ;
`

export const UnstakeButton = styled.div`
  width: 40%;
  margin-left: 15px;
  @media (max-width: ${MD}) {
    width: 100%;
    margin-left: 0;
    margin-top: 10px;
  } ;
`

export const StyledIcon = styled(Icon)`
  height: 15px;
  width: 15px;
  fill: ${GRAY};
  margin-right: 5px;
`

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ReloadWrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #407aeb;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-left: 10px;
`

export const ReloadIcon = styled(Icon)`
  fill: white;
  width: 17px;
  height: 17px;
`

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`
