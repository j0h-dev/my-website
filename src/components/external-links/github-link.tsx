type GithubLinkProps = {
  children: React.ReactNode
  className?: string
}
export function GithubLink({ children, className }: GithubLinkProps) {
  return (
    <a
      aria-label="Link to Github profile"
      href="https://github.com/ItsOnlyGame"
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {children}
    </a>
  )
}
