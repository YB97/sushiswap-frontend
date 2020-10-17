import React, { useState } from 'react'
import UKFlag from '../../assets/img/united-kingdom.svg'
import ChinaFlag from '../../assets/img/china.svg'
import { LangList, LangImage, StyledLang, LangItem, StyledLangSelect } from './styled'

const options = [
  { img: UKFlag, label: 'English', shortLabel: 'EN' },
  { img: ChinaFlag, Label: 'Chinese', shortLabel: 'CH'},
]

const LangSelect = (props) => {
  const [listVisibility, setListVisibility] = useState(false)
  const [language, setLanguage] = useState('English')


  const onLangClick = () => {
    setListVisibility(true)
  }

  const onItemClick = ({label}) => () => {
    
  }

  const renderLangList = () => {
    if (!listVisibility) return
    return options.map((item) => {
      return (
        <LangList>
          <LangItem>
            <LangImage src={item.img} />
            {/* <span>{item.label}</span> */}
          </LangItem>
        </LangList>
      )
    })
  }

  return (
    <StyledLangSelect>
      <StyledLang onClick={onLangClick}>
        <LangImage src={UKFlag} />
        {/* <span>{language}</span> */}
      </StyledLang>
      {renderLangList()}
    </StyledLangSelect>
  )
}

export default LangSelect
