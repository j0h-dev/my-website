import Link from 'next/link'
import { ReactNode } from 'react'

export function LinkButton({ children, href, blank }: { children: ReactNode; href: string; blank: boolean }) {
	return (
		<Link href={href} target={blank ? '_blank' : '_self'}>
			<button className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-gray-100 rounded-md transition-colors">{children}</button>
		</Link>
	)
}
