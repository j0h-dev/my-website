import { LinkButton } from "./Buttons";

export default function Header() {
  return (
    <div className="absolute flex flex-row gap-4 top-3 right-16">
      <LinkButton theme="minimal" href="/">
        Home
      </LinkButton>

      <LinkButton theme="minimal" href="/projects">
        Projects
      </LinkButton>

      <LinkButton theme="minimal" href="/contact">
        Contact
      </LinkButton>
    </div>
  );
}
