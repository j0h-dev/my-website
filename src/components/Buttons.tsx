import Link from "next/link";
import type { ReactNode } from "react";

export function LinkButton({
  children,
  href,
  blank = false,
  theme = "default",
}: {
  children: ReactNode;
  href: string;
  blank?: boolean;
  theme?: "default" | "minimal";
}) {
  const defaultStyle =
    "flex flex-row gap-2 justify-center items-center px-3 py-2 bg-gray-700 hover:bg-gray-600 text-gray-100 rounded-md transition-colors";
  const minimalStyle =
    "flex flex-row gap-2 justify-center items-center px-3 py-2 hover:bg-gray-600/70 text-gray-100 rounded-md transition-colors";

  return (
    <Link href={href} target={blank ? "_blank" : "_self"}>
      <button
        className={theme === "default" ? defaultStyle : minimalStyle}
        type="button"
      >
        {children}
      </button>
    </Link>
  );
}
