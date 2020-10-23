import React from 'react'
import {
  Circle,
  Line,
  Wrapper,
  CircleWrapper,
  Label,
  CircleContent,
  ActiveLine,
} from './styled'

interface IProps {
  margin?: string
  steps: {
    active: boolean
    label: string
  }[]
}

const Stepper: React.FC<IProps> = ({ margin, steps = [] }) => {
  const activeSteps = steps.filter(({ active }) => active)

  return (
    <Wrapper margin={margin}>
      <Line>
        <ActiveLine
          width={activeSteps.length > 1 && `${100 / (activeSteps.length - 1)}%`}
        ></ActiveLine>
      </Line>
      <CircleWrapper>
        {steps.map(({ active, label }) => {
          return (
            <CircleContent>
              <Circle active={active} />
              <Label active={active}>{label}</Label>
            </CircleContent>
          )
        })}
        {/* <Circle /> */}
      </CircleWrapper>
    </Wrapper>
  )
}

export default Stepper
