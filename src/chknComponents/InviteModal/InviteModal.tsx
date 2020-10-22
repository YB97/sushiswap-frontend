import React, { useEffect, useState, useContext } from 'react'
import Button from '../Button'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import {
  StyledOverlay,
  StyledPopup,
  StyledPopupClickBoard,
  StyledPopupHeader,
  StyledPopupHeaderContent,
  StyledPopupHeaderImage,
  StyledPopupWrapper,
  StyledPopupContentWrapper,
  StyledPopupFooter,
  StyledPopupFooterButtonWrapper,
  StyledPopupFooterLink,
  StyledRulesHeader,
  StyledRulesText,
  StyledBannerText,
  StyledPopupFooterTextWrapper,
} from './styled'
import headerImg from './img/header-img.svg'
import headerBg from './img/header-bg.png'
import { getChknLookupContract } from '../../sushi/utils'
import useSushi from '../../hooks/useSushi'
import useReferral from '../../hooks/useReferral'
import Spinner from '../Spinner'
import { LangContext } from '../../contexts/Lang'

interface InviteModalProps {
  price?: string
  onIsOpenChange?: () => void
}

const InviteModal: React.FC<InviteModalProps> = ({ onIsOpenChange, price }) => {
  const { messages } = useContext(LangContext)
  const [isCopied, setCopied] = useState<boolean>(false)
  const [isPromo, setIsPromo] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const sushi = useSushi()
  const lookup = getChknLookupContract(sushi)
  const { generate, getReferralLink, currentLink } = useReferral()

  // const lookupContract = getChknLookupContract(sushi)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    getReferralLink()

    // const promoEndDate = moment.tz('2020-10-18 14:00', 'America/New_York')

    // setIsPromo(moment().isSameOrBefore(promoEndDate))

    return () => {
      document.body.style.overflow = ''
    }
  }, [getReferralLink])

  const generateAndGetValue = async () => {
    setIsGenerating(true)
    try {
      await generate()
      await getReferralLink()
    } catch (err) {
      console.log('error', err)
    } finally {
      setIsGenerating(false)
    }
  }

  const onPopupClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const onOverlayClick = (e) => {
    onIsOpenChange()
  }

  const onClickCopy = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  const renderInviteButton = () => {
    return (
      <CopyToClipboard text={currentLink || ''}>
        <Button
          shape="rect"
          theme="primary"
          onClick={currentLink ? onClickCopy : generateAndGetValue}
          height="60px"
        >
          {isCopied ? 'Copied' : 'Refer Now'}
        </Button>
      </CopyToClipboard>
    )
  }

  return (
    <StyledOverlay onClick={onOverlayClick}>
      <StyledPopupWrapper onClick={onPopupClick} isPromo={isPromo}>
        <StyledPopup>
          <StyledPopupHeader style={{ backgroundImage: `url(${headerBg})` }}>
            <StyledPopupHeaderImage>
              <div className="popup-header__image-wrapper">
                <img src={headerImg} alt="header-bg" />
              </div>
            </StyledPopupHeaderImage>
            <StyledPopupHeaderContent>
              <h3>{messages.modal.referral.title}</h3>
              <p>{messages.modal.referral.subtitle}</p>
              <span>{messages.modal.referral.refTitle}</span>
              <CopyToClipboard text={currentLink || ''}>
                <StyledPopupClickBoard
                  title={currentLink || ''}
                  onClick={currentLink ? onClickCopy : generateAndGetValue}
                >
                  {currentLink ? (
                    isCopied ? (
                      'Copied'
                    ) : (
                      currentLink.slice(12)
                    )
                  ) : isGenerating ? (
                    <Spinner />
                  ) : (
                    messages.modal.referral.generatePlaceholder
                  )}
                </StyledPopupClickBoard>
              </CopyToClipboard>
            </StyledPopupHeaderContent>
          </StyledPopupHeader>
          {!isPromo && (
            <>
              <StyledPopupContentWrapper>
                <p>
                  <b>{messages.modal.referral.rules}</b>
                </p>
                <p>- {messages.modal.referral.paragraph1}</p>
                <p>- {messages.modal.referral.paragraph2}</p>
                <p>- {messages.modal.referral.paragraph3}</p>
                <p>
                  - {messages.modal.referral.paragraph4}
                  <br />
                  <b>{messages.modal.referral.paragraph5}</b>
                </p>
              </StyledPopupContentWrapper>
              <StyledPopupFooter>
                <StyledPopupFooterButtonWrapper>
                  {renderInviteButton()}
                </StyledPopupFooterButtonWrapper>
                <StyledPopupFooterTextWrapper>
                  <span>{messages.modal.referral.poolSize}:</span>
                  <h2>${price || '25,000'}</h2>
                </StyledPopupFooterTextWrapper>
              </StyledPopupFooter>
            </>
          )}
          {isPromo && (
            <StyledPopupContentWrapper>
              <StyledRulesHeader>
                {messages.modal.referral.rules}
              </StyledRulesHeader>
              <StyledRulesText>
                {messages.system_update_modal.week_text}
              </StyledRulesText>
              <StyledBannerText>
                {messages.system_update_modal.soon_text}
              </StyledBannerText>
            </StyledPopupContentWrapper>
          )}
        </StyledPopup>
      </StyledPopupWrapper>
    </StyledOverlay>
  )
}

export default InviteModal
