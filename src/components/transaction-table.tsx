import dayjs from 'dayjs'
import { useTransactionContext } from '../contexts/transaction-context'
import { priceFormatter } from '../utils/formatter'

export function TransactionTable() {
  const { transactions } = useTransactionContext()

  return (
    <main className="mt-6 flex w-full justify-center p-2">
      <div className="flex overflow-x-auto">
        <table className="w-full min-w-[1120px] border-separate border-spacing-y-2 text-zinc-50">
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id} className="bg-zinc-700 font-semibold">
                  <td className="w-1/4 rounded-tl-md rounded-bl-md px-10 py-4 md:w-1/2">
                    {transaction.description}
                  </td>
                  {transaction.type === 'income' ? (
                    <td className=" px-10 py-4 text-green-500">
                      {priceFormatter.format(transaction.price)}
                    </td>
                  ) : (
                    <td className=" px-10 py-4 text-red-400">
                      - {priceFormatter.format(transaction.price)}
                    </td>
                  )}

                  <td className=" px-10 py-4">{transaction.category}</td>
                  <td className="rounded-tr-md rounded-br-md px-10 py-4">
                    {dayjs(transaction.createdAt).format('DD/MM/YYYY')}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </main>
  )
}
