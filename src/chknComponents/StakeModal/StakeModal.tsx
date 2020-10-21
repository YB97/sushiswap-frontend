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
import { BigNumber } from '../../sushi'
import { bnToDec } from '../../utils'
import useAllowance from '../../hooks/useAllowance'
import ModalConfirm from '../ModalConfirm'

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
  const [loading, setLoading] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const chkn = useSushi()
  const handlePopupClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    onPopupClick && onPopupClick(e)
  }
  const chknContract = getSushiContract(chkn)

  const tokenStakeRewardPoolContract = getChknStakeRewardPool(chkn)
  const { onApprove } = useApprove(chknContract, tokenStakeRewardPoolContract)
  const allowance = useAllowance(chknContract, tokenStakeRewardPoolContract)
  const tokenBalance = useTokenBalance(chknContract.options.address)
  const tokenBalanceDec = bnToDec(new BigNumber(tokenBalance))
  const maxDec = bnToDec(new BigNumber(max))

  const handleApprove = useCallback(async () => {
    try {
      setLoading(true)
      const txHash = await onApprove()
      setApproved(true)
      // user rejected tx or didn't go thru
      if (!txHash) {
        setApproved(false)
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }, [onApprove])

  const handleClick = async () => {
    setLoading(true)

    try {
      await onBtnClick(value)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }
  const handleAction = () => {
    if (!isStake) {
      setShowConfirm(true)

      return
    }

    handleClick()
  }

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
                      setValue(
                        isStake
                          ? tokenBalanceDec.toString()
                          : maxDec.toString(),
                      )
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
                  onClick={
                    approved || !!allowance.toNumber()
                      ? handleAction
                      : handleApprove
                  }
                  // old - onClick={
                  //   approved || !!allowance.toNumber()
                  //     ? handleClick
                  //     : handleApprove
                  // }

                  disabled={
                    !value ||
                    isNaN(Number(value)) ||
                    Number(value) >
                      Number(isStake ? tokenBalanceDec.toString() : maxDec)
                  }
                  loading={loading}
                  minWidth="130px"
                >
                  {approved || !!allowance.toNumber() ? title : 'Approve'}
                </Button>
              </div>
            </div>
          </StyledWrapper>
        </StyledPopup>
      </StyledBg>
      {showConfirm && (
        <ModalConfirm
          onOverlayClick={() => setShowConfirm(false)}
          onCancel={() => {
            setShowConfirm(false)
            onCancel()
          }}
          title="Are you sure?"
          text="You are missing out on up to $500,000 in rewards"
          onConfirm={handleClick}
          confirmBtnText="Unstake"
        />
      )}
    </StyledOverlay>
  )
}

export default StakeModal
