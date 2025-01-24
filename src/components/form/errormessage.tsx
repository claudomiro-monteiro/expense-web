import { useFormContext } from 'react-hook-form'

export interface ErrorMessageProps {
  field: string
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function get(obj: Record<any, any>, path: string) {
  const travel = (regexp: RegExp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce(
        (res, key) => (res !== null && res !== undefined ? res[key] : res),
        obj
      )

  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/)

  return result
}

export function ErrorMessage({ field }: ErrorMessageProps) {
  const {
    formState: { errors },
  } = useFormContext()

  const fieldError = get(errors, field)

  if (!fieldError) {
    return null
  }
  return (
    <span className="-mb-2 -mt-4 ml-2 text-red-500 text-xs">
      {fieldError.message?.toString()}
    </span>
  )
}
