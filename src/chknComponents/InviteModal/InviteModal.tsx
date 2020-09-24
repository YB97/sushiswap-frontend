import React, { useEffect, useState } from 'react'
import Button from '../Button'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useWallet } from 'use-wallet'
import moment from 'moment'

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
import getInviteLink from '../../views/CHKNHome/helpers/getInviteLink'
import { COPIED_DELAY } from './constants'

interface InviteModalProps {
  isFirstWeek?: boolean
  onIsOpenChange?: () => void
}

const InviteModal: React.FC<InviteModalProps> = ({ onIsOpenChange }) => {
  const [isCopied, setCopied] = useState<boolean>(false)
  const [isPromo, setIsPromo] = useState(false)
  const { account } = useWallet()

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const promoEndDate = moment('2020-09-24').add(7, 'days').startOf('day')

    setIsPromo(moment().isSameOrBefore(promoEndDate))

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

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
    const invitedLink = account ? getInviteLink(account) : null
    return (
      invitedLink && (
        <CopyToClipboard text={invitedLink}>
          <Button shape="rect" theme="primary" onClick={onClickCopy}>
            {isCopied ? 'Copied' : 'Refer Now'}
          </Button>
        </CopyToClipboard>
      )
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
              <CopyToClipboard text="chkn.farm/CHKB0214">
                <StyledPopupClickBoard onClick={onClickCopy}>
                  {isCopied ? 'Copied' : 'chkn.farm/CHKB0214'}
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
                <span>Current total reward pool size:</span>
                <h2>$12,000,678</h2>
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
