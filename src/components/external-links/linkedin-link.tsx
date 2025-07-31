type LinkedinLinkProps = {
  children: React.ReactNode
  className?: string
}

export function LinkedinLink({ children, className }: LinkedinLinkProps) {
  return (
    <a
      aria-label="Link to LinkedIn profile"
      href="https://www.linkedin.com/in/jaroheinonen/"
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {children}
    </a>
  )
}
