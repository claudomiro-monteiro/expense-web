import type { LabelHTMLAttributes } from 'react'

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

export function Label(props: LabelProps) {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: <explanation>
    <label
      className="flex items-center gap-3 px-3 py-2 text-center text-zinc-50 hover:shadow-sm"
      {...props}
    />
  )
}
