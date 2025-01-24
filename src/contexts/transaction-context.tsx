import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { api } from '../lib/axios'
import dayjs from 'dayjs'

interface Transaction {
  id: string
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: () => Promise<void>
  searchTransactions: (
    searchText?: string,
    dateInitial?: string,
    dateFinal?: string
  ) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions() {
    const response = await api.get('/', {})

    setTransactions(response.data)
  }

  async function searchTransactions(
    searchText?: string,
    dateInitial?: string,
    dateFinal?: string
  ) {
    const response = await api.get('searchdate', {
      params: {
        searchText: searchText,
        dateInitial: dateInitial,
        dateFinal: dayjs(dateFinal).hour(24),
      },
    })
    // console.log(dateFinal)
    setTransactions(response.data)
  }

  async function createTransaction(data: CreateTransactionInput) {
    const { description, price, category, type } = data

    const response = await api.post('expense', {
      description,
      price,
      category,
      type,
    })

    setTransactions(state => [response.data, ...state])
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        searchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactionContext = () => useContext(TransactionsContext)
