import { PropsWithChildren } from 'react'

export function Project({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-center gap-x-14 gap-y-6 py-8 xl:flex-row">
      {children}
    </div>
  )
}
