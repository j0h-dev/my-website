import type { VariantProps } from 'class-variance-authority'
import Link, { type LinkProps } from 'next/link'
import { forwardRef } from 'react'
import type { buttonVariants } from './button'
import { Button } from './button'

interface LinkButtonProps
  extends LinkProps,
    VariantProps<typeof buttonVariants> {
  className?: string
}

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <Button asChild variant={variant} size={size} className={className}>
        <Link ref={ref} {...props} />
      </Button>
    )
  },
)

LinkButton.displayName = 'LinkButton'

export { LinkButton }
