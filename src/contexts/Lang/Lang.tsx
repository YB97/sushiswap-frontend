import React, { createContext, useState } from 'react'
import { CN, EN, MessageSctructureType } from './constants'

type LangType = 'EN' | 'CN'

interface LangContext {
  lang: LangType
  messages: MessageSctructureType
  onSetLang: (lang: LangType) => void
}

export const LangContext = createContext<LangContext>({
  lang: 'EN',
  messages: EN,
  onSetLang: (newLang) => {},
})

const Lang: React.FC = ({ children }) => {
  const [lang, setLang] = useState<LangType>('EN')
  const [messages, setMessages] = useState<MessageSctructureType>(EN)

  const hadleSetLang = (newLang: LangType) => {
    setLang(newLang)
    const selected = newLang === 'CN' ? CN : EN
    setMessages(selected)
  }

  return (
    <LangContext.Provider
      value={{
        lang,
        messages,
        onSetLang: hadleSetLang,
      }}
    >
      {children}
    </LangContext.Provider>
  )
}

export default Lang
