import styled from 'styled-components'
import bg from '../../assets/img/background-level-0.png'
import bg1 from '../../assets/img/background-level-1.png'
import bg2 from '../../assets/img/background-level-2.png'
import bg3 from '../../assets/img/background-level-3.png'
import bg4 from '../../assets/img/background-level-4.png'
import bg5 from '../../assets/img/background-level-5.png'

const bgSelector = [bg, bg1, bg2, bg3, bg4, bg5]

export const BackgroundImg = styled.div<{ level: number }>`
  ${({ level }) => `background-image: url(${bgSelector[level]});`}
  background-position: center bottom;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 100%;
  min-height: 100vh;
`
/* `background-image: url('/static/media/background/background-level-${level}.png')}`} */
export const Chickens = styled.div<{ chicksNum: number; showChicks: boolean }>`
  height: 100%;
  min-height: 100vh;
  ${({ chicksNum, showChicks }) =>
    showChicks && `animation: chkn-born-${chicksNum} 6s ease-in-out forwards;`}
  background-position: center bottom;
  background-size: 100%;
  background-repeat: no-repeat;
  transition: all 0.15s linear;
`
