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
  StyledPopupFooterTextWrapper,
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
              <h3>Refer your friends and earn on everything they stake!</h3>
              <p>Share a referral link to them via SMS / Email</p>
              <span>Referral Code</span>
              <CopyToClipboard text={currentLink || ''}>
                <StyledPopupClickBoard
                  title={currentLink || ''}
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
                  <b>Rules</b>
                </p>
                <p>
                  - When a friend clicks your referral link, and then connects
                  their wallet and stakes on chkn.farm, your ethereum address is
                  credited with a certain number of points.
                </p>
                <p>
                  - The amount of points you earn is based on how much your
                  friend stakes. To be eligible for points, you and each of the
                  friends you invite personally must stake at least $200 worth
                  of liquidity on chkn.farm and maintain that minimum balance.
                </p>
                <p>
                  - If you invite 2 friends, then you also earn points on all of
                  the liquidity staked by the people who they invite (75% as
                  many points as if you referred their invites directly). And if
                  you invite 3 or more friends, then you earn points on all of
                  the liquidity staked by who your friends’ invites invite as
                  well (50% as many points as if you referred their invites
                  directly).
                </p>
                <p>
                  - When the farm hits any of the liquidity market cap
                  milestones below, 75% of the Referral Bonus Pool unlocks and
                  you earn a share of the rewards based on the number of points
                  you’ve accumulated divided by the total points of everyone on
                  the farm. Final milestone unlocks 100%.
                  <br />
                  <b>
                    Milestones: $500k, $1.25m, $2.5m, $5m, $12.5m, $25m, $50m,
                    $100m, $250m, $500m
                  </b>
                </p>
              </StyledPopupContentWrapper>
              <StyledPopupFooter>
                <StyledPopupFooterButtonWrapper>
                  {renderInviteButton()}
                </StyledPopupFooterButtonWrapper>
                <StyledPopupFooterTextWrapper>
                  <span>Current total reward pool size:</span>
                  <h2>$25,000</h2>
                </StyledPopupFooterTextWrapper>
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
