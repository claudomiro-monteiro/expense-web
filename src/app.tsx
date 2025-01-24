import { FormSearch } from './components/formSearch'
import { Header } from './components/header'
import { Sumarry } from './components/summary'
import { TransactionTable } from './components/transaction-table'
import { TransactionProvider } from './contexts/transaction-context'

export function App() {
  return (
    <TransactionProvider>
      <Header />
      <Sumarry />
      <FormSearch />
      <TransactionTable />
    </TransactionProvider>
  )
}
