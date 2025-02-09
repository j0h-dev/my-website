import { Icon } from '@iconify-icon/react'

export function Footer() {
  return (
    <footer className="flex h-24 flex-col items-center justify-center gap-4 border-t border-slate-100 py-8 text-slate-100">
      <p>@Made by Jaro Heinonen | {new Date().getFullYear()}</p>

      <div className="flex w-full flex-row items-center justify-center gap-6">
        <a
          href="https://github.com/ItsOnlyGame"
          target="_blank"
          className="flex flex-row items-center justify-center gap-x-2"
        >
          <Icon icon="mdi:github" />
          <p>@ItsOnlyGame</p>
        </a>
        <a
          href="https://www.linkedin.com/in/jaroheinonen/"
          target="_blank"
          className="flex flex-row items-center justify-center gap-x-2"
        >
          <Icon icon="mdi:linkedin" />
          <p>Jaro Heinonen</p>
        </a>
      </div>
    </footer>
  )
}
