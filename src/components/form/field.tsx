import type { HTMLAttributes } from 'react'

export type FieldPros = HTMLAttributes<HTMLDivElement>

export function Field(props: FieldPros) {
  return (
    <div
      className="flex w-full items-start gap-2 rounded-lg bg-zinc-900 px-3 py-2 shadow-sm focus-within:border-green-900 focus-within:ring-2 focus-within:ring-green-800"
      {...props}
    />
  )
}
