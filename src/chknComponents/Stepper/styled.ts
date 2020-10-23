import styled from 'styled-components'
import check from '../../assets/img/check.svg'

export const Line = styled.div`
  height: 4px;
  background-color: #e5f7fb;
  box-sizing: border-box;
  margin: 0 20px;
`

export const Wrapper = styled.div<{ margin?: string }>`
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  ${({ margin }) => margin && `margin: ${margin};`};
`

export const Circle = styled.div<{ active?: boolean }>`
  height: 30px;
  width: 30px;
  border-radius: 30px;
  border: 3px solid #fff;
  border-color: ${({ active }) => (active ? '#01a981' : '#FFFFFF')};
  background-color: ${({ active }) => (active ? '#02C697' : '#DAF3FA')};
  ${({ active }) =>
    active &&
    `
    background-image: url(${check});
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
  `};
`

export const CircleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  transform: translateY(-28%);
`

export const Label = styled.div<{ active?: boolean }>`
  font-size: 16px;
  margin-top: 15px;
  font-weight: bold;
  color: ${({ active }) => (active ? '#222a3f' : '#546576')};
`
export const CircleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ActiveLine = styled.div<{ width?: string }>`
  width: ${({ width }) => width || '0%'};
  height: 100%;
  background-color: #01a981;
`
