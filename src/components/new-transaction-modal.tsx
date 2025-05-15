import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { ArrowDownCircle, ArrowUpCircle, X } from 'lucide-react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { useTransactionContext } from '../contexts/transaction-context'
import { Form } from './form'
import { Button } from './ui/button'

type CreateFormData = z.infer<typeof createFormSchema>

const createFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

export function NewTransactionModal() {
  const { createTransaction } = useTransactionContext()

  const createForm = useForm<CreateFormData>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      type: 'income',
    },
  })

  const { handleSubmit, control, reset } = createForm

  async function handleCreateTransaction(data: CreateFormData) {
    const { description, price, category, type } = data

    try {
      await createTransaction({
        description,
        price,
        category,
        type,
      })
      toast.success('Despesa cadastrada com sucesso.')
      reset()
    } catch (error) {
      toast.error('Despesa não cadastrada, tente mais tarde.')
      console.log(error)
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/70" />
      <Dialog.Content className="-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 min-w-[22rem] space-y-4 rounded-lg bg-zinc-800 px-4 py-6 text-zinc-50 sm:min-w-[32rem] sm:px-12 sm:py-10">
        <Dialog.Title className="font-semibold text-2xl">
          Nova transação
        </Dialog.Title>
        <FormProvider {...createForm}>
          <form
            onSubmit={handleSubmit(handleCreateTransaction)}
            className="mt-10 space-y-4"
          >
            <Form.Field>
              <Form.Input
                name="description"
                id="description"
                placeholder="Descrição"
              />
            </Form.Field>

            <Form.Field>
              <Form.InputNumber
                name="price"
                id="price"
                type="number"
                step={0.01}
                placeholder="Valor"
              />
            </Form.Field>

            <Form.Field>
              <Form.Input
                name="category"
                id="category"
                placeholder="Categoria"
              />
            </Form.Field>

            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                return (
                  <RadioGroup.Root
                    onValueChange={field.onChange}
                    value={field.value}
                    className="mt-2 grid grid-cols-2 gap-4 font-semibold text-base"
                  >
                    <RadioGroup.Item
                      value="income"
                      className="data-[state=checked]:bg-green-700 data-[state=checked]:text-white data-[state=unchecked]:text-green-700"
                      asChild
                    >
                      <Button
                        variant="secondary"
                        type="button"
                        className="gap-4"
                      >
                        <ArrowUpCircle size={24} />
                        <span className="text-zinc-200">Entrada</span>
                      </Button>
                    </RadioGroup.Item>
                    <RadioGroup.Item
                      value="outcome"
                      className="data-[state=checked]:bg-red-700 data-[state=checked]:text-white data-[state=unchecked]:text-red-700"
                      asChild
                    >
                      <Button
                        variant="secondary"
                        type="button"
                        className="gap-4"
                      >
                        <ArrowDownCircle size={24} />
                        <span className="text-zinc-200">Saída</span>
                      </Button>
                    </RadioGroup.Item>
                  </RadioGroup.Root>
                )
              }}
            />

            <Button type="submit" className="h-12 w-full">
              Cadastrar
            </Button>
          </form>
        </FormProvider>
        <Dialog.Close className="absolute top-2 right-6 border-none bg-transparent">
          <X />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
