import styled, { css, keyframes } from 'styled-components'

interface Props {
  size?: 'small' | 'medium'
  color?: string
}

const SpinnerAnimation = keyframes`{
  from {
    transform: translate(-50%,-50%) rotate(0deg)
  }
  to {
    transform: translate(-50%,-50%) rotate(360deg)
  }
}`

export const StyledSpinnerWrapper = styled.div<Props>`
  width: 20px;
  height: 20px;
  padding: 3px;
  display: inline-block;
  overflow: hidden;
  background: transparent;

  ${({ size }) => {
    if (size === 'small') {
      return smallSpinnerSize
    }

    if (size === 'medium') {
      return mediumSpinnerSize
    }
  }}
`
export const StyledSpinner = styled.div<Props>`
  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border: ${({ color }) => `3px solid ${color || '#838383'}`};
    ${({ size }) => size === 'small' && 'border-width: 2px;'}
    border-top-color: transparent;
    border-radius: 50%;
    animation: ${SpinnerAnimation} 1s linear infinite;
  }

  width: 100%;
  height: 100%;
  position: relative;
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
`

const smallSpinnerSize = css`
  width: 10px;
  height: 10px;
`

const mediumSpinnerSize = css`
  width: 20px;
  height: 20px;
`
