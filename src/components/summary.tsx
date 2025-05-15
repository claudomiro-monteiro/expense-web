import entrada from '../assets/entrada.svg'
import saida from '../assets/saida.svg'
import total from '../assets/total.svg'
import { useSummary } from '../hooks/useSummary'
import { priceFormatter } from '../utils/formatter'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export function Sumarry() {
  const summary = useSummary()

  const [sliderRef] = useKeenSlider(
    {
      breakpoints: {
        '(min-width: 400px)': {
          slides: { perView: 1, origin: 'auto', spacing: 5 },
        },
        '(min-width: 760px)': {
          slides: { perView: 2, origin: 'auto', spacing: 5 },
        },
        '(min-width: 1020px)': {
          slides: { perView: 3, origin: 'auto', spacing: 10 },
        },
      },
    },
    [
      // add plugins here
    ]
  )

  return (
    <div className="-mt-16 flex w-full justify-center px-2 text-white">
      <div
        ref={sliderRef}
        className="keen-slider grid max-w-[1120px] grid-cols-3"
      >
        <div className="keen-slider__slide flex min-w-80 flex-col gap-4 rounded-md bg-zinc-700 px-6 py-8">
          <div className="flex items-center">
            <p className="font-semibold text-xl">Entradas</p>
            <img src={entrada} alt="entrada" className="ml-auto" />
          </div>
          <strong className="font-bold text-4xl">
            {priceFormatter.format(summary.income)}
          </strong>
        </div>
        <div className="keen-slider__slide flex min-w-80 flex-col gap-4 rounded-md bg-zinc-700 px-6 py-8">
          <div className="flex items-center">
            <p className="font-semibold text-xl">Saídas</p>
            <img src={saida} alt="entrada" className="ml-auto" />
          </div>
          <strong className="font-bold text-4xl">
            {priceFormatter.format(summary.outcome)}
          </strong>
        </div>
        <div className="keen-slider__slide flex min-w-80 flex-col gap-4 rounded-md bg-green-800 px-6 py-8">
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
