import { PropsWithChildren } from 'react'

export function Tag({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-row items-center justify-center gap-x-2 rounded-xl bg-gray-700 px-3 py-2 text-gray-100 hover:bg-gray-600">
      {children}
    </div>
  )
}
