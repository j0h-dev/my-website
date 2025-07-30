import { Link, type LinkComponentProps } from '@tanstack/react-router'
import type { VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'
import type { buttonVariants } from './button'
import { Button } from './button'

type LinkButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  LinkComponentProps &
  VariantProps<typeof buttonVariants>

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <Button asChild variant={variant} size={size} className={className}>
        <Link ref={ref} {...props} />
      </Button>
    )
  }
)

LinkButton.displayName = 'LinkButton'

export { LinkButton }
