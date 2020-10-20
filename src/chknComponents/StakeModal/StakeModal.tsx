import React, { useCallback, useMemo, useState } from 'react'
import Button from '../Button'
import { StyledHeader, StyledWrapper } from '../AddModal/styled'
import { StyledBg } from '../AlertInfoModal/styled'

import { StyledOverlay, StyledPopup } from '../InviteModal/styled'
import { StyledInput } from './styled'
import { getContract } from '../../utils/erc20'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import useApprove from '../../hooks/useApprove'

const StakeModal: any = ({
  onOverlayClick,
  onPopupClick,
  onBtnClick,
  onCancel,
  title = 'Stake CHKN',
}) => {
  const { ethereum } = useWallet()
  const [value, setValue] = useState('')
  const [approved, setApproved] = useState(false)
  const handlePopupClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    onPopupClick && onPopupClick(e)
  }
  const lpContract: any = useMemo(() => {
    return getContract(
      ethereum as provider,
      '0xdaa2ea654623783446E9EDDbB2c94C2fE98B14eE',
    )
  }, [ethereum])

  const { onApprove } = useApprove(lpContract)

  const handleApprove = useCallback(async () => {
    try {
      const txHash = await onApprove()
      setApproved(true)
      // user rejected tx or didn't go thru
      if (!txHash) {
        setApproved(false)
      }
    } catch (e) {
      console.log(e)
    }
  }, [onApprove])

  const handleClick = () => onBtnClick(value)
  return (
    <StyledOverlay onClick={onOverlayClick}>
      <StyledBg onClick={handlePopupClick}>
        <StyledPopup>
          <StyledWrapper>
            <StyledHeader>{title || 'Stake CHKN'}</StyledHeader>

            <StyledInput
              value={value}
              onChange={(e: any) => setValue(e.target.value)}
              placeholder="Amount"
            />
            <div style={{ marginTop: '20px', display: 'flex' }}>
              <Button shape="rect" onClick={onCancel} theme="light-red">
                Cancel
              </Button>
              <div style={{ marginLeft: '10px' }}>
                <Button
                  shape="rect"
                  onClick={approved ? handleClick : handleApprove}
                  disabled={!value || isNaN(Number(value))}
                >
                  {approved ? title : 'Approve'}
                </Button>
              </div>
            </div>
          </StyledWrapper>
        </StyledPopup>
      </StyledBg>
    </StyledOverlay>
  )
}

export default StakeModal
