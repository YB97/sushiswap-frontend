import styled, { keyframes } from 'styled-components'

const SpinnerAnimation = keyframes`{
  from {
    transform: translate(-50%,-50%) rotate(0deg)
  }
  to {
    transform: translate(-50%,-50%) rotate(360deg)
  }
}`

export const StyledSpinnerWrapper = styled.div`
  width: 20px;
  height: 20px;
  padding: 3px;
  display: inline-block;
  overflow: hidden;
  background: transparent;
`
export const StyledSpinner = styled.div`
  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border: 3px solid #838383;
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
