import React, { useEffect, useState } from 'react'
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
} from './styled'
import headerImg from './img/header-img.svg'
import headerBg from './img/header-bg.png'
import { getChknLookupContract } from '../../sushi/utils'
import useSushi from '../../hooks/useSushi'
import useReferral from '../../hooks/useReferral'
import Spinner from '../Spinner'

interface InviteModalProps {
  onIsOpenChange?: () => void
}

const InviteModal: React.FC<InviteModalProps> = ({ onIsOpenChange }) => {
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
              <h3>Refer your friends and earn on everything they stake!</h3>
              <p>Share a referral link to them via SMS / Email</p>
              <span>Referral Code</span>
              <CopyToClipboard text={currentLink || ''}>
                <StyledPopupClickBoard
                  onClick={currentLink ? onClickCopy : generateAndGetValue}
                >
                  {currentLink ? (
                    isCopied ? (
                      'Copied'
                    ) : (
                      currentLink
                    )
                  ) : isGenerating ? (
                    <Spinner />
                  ) : (
                    'Click to generate'
                  )}
                </StyledPopupClickBoard>
              </CopyToClipboard>
            </StyledPopupHeaderContent>
          </StyledPopupHeader>
          {!isPromo && (
            <>
              <StyledPopupContentWrapper>
                <p>
                  - When your friend clicks your referral link, and then
                  connects their wallet and stakes on chkn.farm, your ethereum
                  address is credited with a certain number of points.
                </p>
                <p>
                  - The amount of points you earn is based on how much they
                  stake and if you directly or indirectly invited them.
                </p>
                <p>
                  - When the farm hits one of 10 total deposit milestones, you
                  earn a share of the Referral Bonus pool that is unlocked (made
                  up of the 5% staking fees).
                </p>
                <p>
                  - Your share of the unlocked pool is calulated by the total
                  points you have accumulated up to that point divided by the
                  total points of everyone on the farm. The more points you have
                  the more you earn so invite as many friends as possible!
                </p>
              </StyledPopupContentWrapper>
              <StyledPopupFooter>
                <span>First reward pool unlock</span>
                <h2>$500,000</h2>
                <StyledPopupFooterButtonWrapper>
                  {renderInviteButton()}
                </StyledPopupFooterButtonWrapper>
                <StyledPopupFooterLink href="https://google.com">
                  How does it work?
                </StyledPopupFooterLink>
              </StyledPopupFooter>
            </>
          )}
          {isPromo && (
            <StyledPopupContentWrapper>
              <StyledRulesHeader>Rules</StyledRulesHeader>
              <StyledRulesText>
                Stay tuned fot the rules, they will be posted here this week.
              </StyledRulesText>
              <StyledBannerText>
                REFERRAL BONUS POOL LAUNCHING SOON
              </StyledBannerText>
            </StyledPopupContentWrapper>
          )}
        </StyledPopup>
      </StyledPopupWrapper>
    </StyledOverlay>
  )
}

export default InviteModal
