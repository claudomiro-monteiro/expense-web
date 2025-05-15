import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from './new-transaction-modal'
import { Button } from './ui/button'

export function Header() {
  return (
    <header className="flex w-full justify-center bg-zinc-950">
      <div className="flex w-full max-w-[1120px] items-center justify-between px-4 pt-6 pb-28 text-white xl:pt-10">
        <div className="flex items-center gap-3">
          <img
            src="/dollar.svg"
            alt="image-dollar"
            className="h-auto w-12 xl:w-16"
          />
          <span className="font-bold text-2xl italic xl:text-3xl">
            Expenses
          </span>
        </div>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button type="button" className="font-semibold text-base">
              Nova transação
            </Button>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </div>
    </header>
  )
}
