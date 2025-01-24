import * as Dialog from '@radix-ui/react-dialog'
import { Button } from './ui/button'
import { NewTransactionModal } from './new-transaction-modal'

export function Header() {
  return (
    <header className="flex w-full justify-center bg-zinc-950">
      <div className="flex w-full max-w-[1120px] items-center justify-between px-4 pt-10 pb-28 text-white">
        <div className="flex items-center gap-3">
          <img src="/dollar.svg" alt="image-dollar" className="h-auto w-16" />
          <span className="font-bold text-3xl italic">Expenses</span>
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
