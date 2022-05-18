import { FormEvent, useState } from 'react'

import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'
import { useTransactions, TransactionOperationType } from '../../context/TransactionsContext'

import { Container, TransactionTypeContainer, RadioButton } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

function NewTransactionModal ({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState<string>('')
  const [value, setValue] = useState<number>(0)
  const [category, setCategory] = useState<string>('')
  const [type, setType] = useState<TransactionOperationType>('withdraw')

  const { createTransaction } = useTransactions()

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newTransaction = {
      title,
      amount: value,
      category,
      type
    }

    await createTransaction(newTransaction)

    setTitle('')
    setValue(0)
    setCategory('')
    setType('withdraw')

    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" className="react-modal-close" onClick={onRequestClose}><img src={closeImg} alt="Fechar modal"></img></button>
      <Container onSubmit={handleSubmitForm}>
        <h2>Cadastrar transação</h2>
        <input placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input placeholder="Valor" value={value} onChange={(e) => setValue(Number(e.target.value))} />

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

        <input placeholder="Categoria" value={category} onChange={(e) => setCategory(e.target.value)} />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}

export { NewTransactionModal }
