import Link from "next/link";
import { ReactNode } from "react";
import style from '@/styles/buttons.module.scss'

interface LinkButtonProps {
    children?: ReactNode
    href: string
    blank?: boolean
}

export function LinkButton({ children, href, blank }: LinkButtonProps) {
    return (
        <Link href={href} target={blank ? '_blank' : '_self'}>
            <button className={style['link-button']}>{children}</button>
        </Link>
    )
}