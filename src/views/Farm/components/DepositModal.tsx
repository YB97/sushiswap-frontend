import BigNumber from 'bignumber.js'
import React, { useCallback, useContext, useMemo, useState } from 'react'
import { StyledHelpText } from '../../../chknComponents/Card/components/MenuCard/styled'
import Button from '../../../components/Button'
import Modal, { ModalProps } from '../../../components/Modal'
import ModalActions from '../../../components/ModalActions'
import ModalTitle from '../../../components/ModalTitle'
import TokenInput from '../../../components/TokenInput'
import { LangContext } from '../../../contexts/Lang'
import { getFullDisplayBalance } from '../../../utils/formatBalance'

interface DepositModalProps extends ModalProps {
  max: BigNumber
  onConfirm: (amount: string) => void
  tokenName?: string
}

const DepositModal: React.FC<DepositModalProps> = ({
  max,
  onConfirm,
  onDismiss,
  tokenName = '',
}) => {
  const { messages } = useContext(LangContext)
  const [val, setVal] = useState('')
  const [pendingTx, setPendingTx] = useState(false)
  const fullTokenName = `${tokenName.split(' ')[0] || ''} Eggs (Farm LP Tokens)`

  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(max)
  }, [max])

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal(e.currentTarget.value)
    },
    [setVal],
  )

  const handleSelectMax = useCallback(() => {
    setVal(fullBalance)
  }, [fullBalance, setVal])

  return (
    <Modal>
      <ModalTitle text={`Deposit ${fullTokenName}`} />
      <TokenInput
        value={val}
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        max={fullBalance}
        symbol={tokenName}
        fullTokenName={fullTokenName}
      />
      <ModalActions>
        <Button text="Cancel" variant="secondary" onClick={onDismiss} />
        <div>
          <Button
            disabled={pendingTx}
            text={pendingTx ? 'Pending Confirmation' : 'Confirm'}
            onClick={async () => {
              setPendingTx(true)
              await onConfirm(val)
              setPendingTx(false)
              onDismiss()
            }}
          />
          {pendingTx && (
            <StyledHelpText>
              {messages.text.trx_duration}
            </StyledHelpText>
          )}
        </div>
      </ModalActions>
      <StyledHelpText marginBottom="40px">
        **PLEASE NOTE: CHKN.farm has updated 4 of its Egg FLP tokens into a new
        FLP version. Your old Eggs for CHKN-ETH, CHKN-USDT, CHKN-SUSHI, and
        CHKN-UNI all need to be migrated. If you have not migrated your Egg FLP
        Tokens for these 4 pairs yet, they will not show up here and you will
        not be able to stake. Please migrate them by going to the CHKN.farm
        Exchange, clicking on Pool, clicking on one of these 4 pairs in the
        list, and then clicking "Migrate". Upon migrating, your Egg FLP tokens
        for these 4 pairs will appear here like normal and you will be able to
        stake them to earn CHKN.
      </StyledHelpText>
    </Modal>
  )
}

export default DepositModal
