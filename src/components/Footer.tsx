import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col gap-4 h-24 items-center justify-center text-slate-100 border-t border-slate-100 mt-8">
      <p>@Made by Jaro Heinonen | {new Date().getFullYear()}</p>

      <div className="flex flex-row items-center justify-center gap-6 w-full">
        <Link
          href="https://github.com/ItsOnlyGame"
          target="_blank"
          className="flex flex-row gap-x-2 justify-center items-center"
        >
          <Icon icon="mdi:github" fontSize="1.75em" />
          <p>@ItsOnlyGame</p>
        </Link>
        <Link
          href="https://www.linkedin.com/in/jaroheinonen/"
          target="_blank"
          className="flex flex-row gap-x-2 justify-center items-center"
        >
          <Icon icon="mdi:linkedin" fontSize="1.75em" />
          <p>Jaro Heinonen</p>
        </Link>
      </div>
    </div>
  );
}
