import { useState } from 'react'

import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'
import { Container, TransactionTypeContainer, RadioButton } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

type TransactionOperationType = 'withdraw' | 'deposit'

function NewTransactionModal ({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState<TransactionOperationType>('withdraw')

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" className="react-modal-close" onClick={onRequestClose}><img src={closeImg} alt="Fechar modal"></img></button>
      <Container >
        <h2>Cadastrar transação</h2>
        <input placeholder="Título"/>
        <input placeholder="Valor"/>

        <TransactionTypeContainer >
          <RadioButton type="button" onClick={() => setType('withdraw')} isActive={type === 'withdraw'} activeColor="green">
            <img src={incomeImg} alt="Entrada"></img>
            <span>Entrada</span>
          </RadioButton>

          <RadioButton type="button" onClick={() => setType('deposit')} isActive={type === 'deposit'} activeColor="red">
            <img src={outcomeImg} alt="Entrada"></img>
            <span>Saída</span>
          </RadioButton>
        </TransactionTypeContainer>

        <input placeholder="Categoria"/>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}

export { NewTransactionModal }
