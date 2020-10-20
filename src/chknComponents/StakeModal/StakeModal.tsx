import React, { useCallback, useState } from 'react'

import Button from '../Button'
import { StyledHeader, StyledWrapper } from '../AddModal/styled'
import { StyledBg } from '../AlertInfoModal/styled'
import { StyledOverlay, StyledPopup } from '../InviteModal/styled'
import { StyledInput } from './styled'
import useApprove from '../../hooks/useApprove'
import circleLogo from '../../assets/img/chkn.svg'
import useTokenBalance from '../../hooks/useTokenBalance'
import { getChknStakeRewardPool, getSushiContract } from '../../sushi/utils'
import useSushi from '../../hooks/useSushi'

const StakeModal: any = ({
  onOverlayClick,
  onPopupClick,
  onBtnClick,
  onCancel,
  max,
  title = 'Stake CHKN',
  isStake,
}) => {
  const [value, setValue] = useState('')
  const [approved, setApproved] = useState(false)
  const chkn = useSushi()
  const handlePopupClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    onPopupClick && onPopupClick(e)
  }
  const chknContract = getSushiContract(chkn)

  console.log('chknContract', chknContract)

  const tokenStakeRewardPoolContract = getChknStakeRewardPool(chkn)
  const { onApprove } = useApprove(chknContract, tokenStakeRewardPoolContract)
  const tokenBalance = useTokenBalance(chknContract.options.address)

  console.log('tokenBalance', tokenBalance.toString())
  console.log('max', max)

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
            <img src={circleLogo} alt="logo" />
            <StyledHeader>{title || 'Stake CHKN'}</StyledHeader>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <StyledInput
                value={value}
                onChange={(e: any) => setValue(e.target.value)}
                placeholder="Amount"
                endAdornment={
                  <Button
                    shape="rect"
                    onClick={() =>
                      setValue(isStake ? tokenBalance.toString() : max)
                    }
                  >
                    MAX
                  </Button>
                }
              />
            </div>
            <div style={{ marginTop: '20px', display: 'flex' }}>
              <Button shape="rect" onClick={onCancel} theme="light-red">
                Cancel
              </Button>
              <div style={{ marginLeft: '10px' }}>
                <Button
                  shape="rect"
                  onClick={approved ? handleClick : handleApprove}
                  disabled={
                    !value ||
                    isNaN(Number(value)) ||
                    Number(value) >
                      Number(isStake ? tokenBalance.toString() : max)
                  }
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
