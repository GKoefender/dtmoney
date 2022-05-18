import { createContext, ReactNode, useEffect, useState, useContext } from 'react'
import { api } from '../services/api'

export type TransactionOperationType = 'withdraw' | 'deposit'

interface transactionProps {
  id: number,
  title: string,
  amount: number
  category: string
  type: TransactionOperationType
  createdAt: string
}

// type transactionInput = Omit<transactionProps, 'id' | 'createdAt'>
type TransactionInput = Pick<transactionProps, 'title' | 'amount' | 'category' | 'type'>

interface TransactionsContextProps {
  transactions: transactionProps[]
  createTransaction: (transactionInput: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextProps>({} as TransactionsContextProps)

interface TransactionsProviderProps {
  children: ReactNode
}

const TransactionProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<transactionProps[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  const createTransaction = async (transactionInput: TransactionInput) => {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    })
    const { transaction } = response.data
    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

const useTransactions = () => {
  const context = useContext(TransactionsContext)
  return context
}

export { TransactionProvider, useTransactions }
