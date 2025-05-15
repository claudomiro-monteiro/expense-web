import { zodResolver } from '@hookform/resolvers/zod'
import { Search } from 'lucide-react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { useTransactionContext } from '../contexts/transaction-context'
import { Form } from './form'
import { Button } from './ui/button'

const createFormSchema = z.object({
  searchText: z.string(),
  dateInitial: z.string(),
  dateFinal: z.string(),
})

type CreateFormData = z.infer<typeof createFormSchema>

export function FormSearch() {
  const { searchTransactions } = useTransactionContext()

  const createForm = useForm<CreateFormData>({
    resolver: zodResolver(createFormSchema),
  })

  const { handleSubmit } = createForm

  async function handleSearchTransaction(data: CreateFormData) {
    await searchTransactions(data.searchText, data.dateInitial, data.dateFinal)
    console.log(data.searchText, data.dateInitial, data.dateFinal)
  }

  return (
    <div className="mt-16 flex w-full items-end justify-center p-2">
      <FormProvider {...createForm}>
        <form
          onSubmit={handleSubmit(handleSearchTransaction)}
          id="formSearch"
          className="flex w-full max-w-[1120px] flex-col items-center gap-4 md:flex-row md:items-end md:gap-8"
        >
          <div className="w-full md:flex-1">
            <Form.Field>
              <Form.Input
                name="searchText"
                id="searchText"
                placeholder="Faça sua busca"
              />
            </Form.Field>
          </div>
          <div className="block w-full sm:flex sm:w-96 sm:space-x-6">
            <div className="flex flex-col">
              <Form.Label htmlFor="initialDate">Data inicial</Form.Label>
              <Form.Field>
                <Form.Input
                  name="dateInitial"
                  id="dateInitial"
                  type="date"
                  placeholder=""
                />
              </Form.Field>
            </div>
            <div className="flex flex-col">
              <Form.Label htmlFor="finalDate">Data final</Form.Label>
              <Form.Field>
                <Form.Input
                  name="dateFinal"
                  id="dateFinal"
                  type="date"
                  placeholder=""
                />
              </Form.Field>
            </div>
          </div>
          <Button
            type="submit"
            variant="secondary"
            className="h-12 w-full font-semibold text-base md:w-40"
          >
            <Search />
            Buscar
          </Button>
        </form>
      </FormProvider>
    </div>
  )
}
