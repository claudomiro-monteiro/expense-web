import entrada from '../assets/entrada.svg'
import saida from '../assets/saida.svg'
import total from '../assets/total.svg'
import { priceFormatter } from '../utils/formatter'
import { useSummary } from '../hooks/useSummary'

export function Sumarry() {
  const summary = useSummary()

  return (
    <div className="-mt-16 flex w-full justify-center text-white">
      <div className="grid max-w-[1120px] grid-cols-3 gap-10">
        <div className="flex min-w-80 flex-col gap-4 rounded-md bg-zinc-700 px-6 py-8">
          <div className="flex items-center">
            <p className="font-semibold text-xl">Entradas</p>
            <img src={entrada} alt="entrada" className="ml-auto" />
          </div>
          <strong className="font-bold text-4xl">
            {priceFormatter.format(summary.income)}
          </strong>
        </div>
        <div className="flex min-w-80 flex-col gap-4 rounded-md bg-zinc-700 px-6 py-8">
          <div className="flex items-center">
            <p className="font-semibold text-xl">Saídas</p>
            <img src={saida} alt="entrada" className="ml-auto" />
          </div>
          <strong className="font-bold text-4xl">
            {priceFormatter.format(summary.outcome)}
          </strong>
        </div>
        <div className="flex min-w-80 flex-col gap-4 rounded-md bg-green-800 px-6 py-8">
          <div className="flex items-center">
            <p className="font-semibold text-xl">Total</p>
            <img src={total} alt="entrada" className="ml-auto" />
          </div>
          <strong className="font-bold text-4xl">
            {priceFormatter.format(summary.total)}
          </strong>
        </div>
      </div>
    </div>
  )
}
