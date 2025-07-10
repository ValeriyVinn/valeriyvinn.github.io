"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import css from "./LocaleSwitcher.module.css"

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const currentLocale = useLocale();

  function getNewPath(locale: string) {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  }

  return (
    <div className={css.localeSwitcher}>
      <Link href={getNewPath("en")}>
        <button disabled={currentLocale === "en"}>English</button>
      </Link>
      <Link href={getNewPath("uk")}>
        <button disabled={currentLocale === "uk"}>Українська</button>
      </Link>
    </div>
  );
}
