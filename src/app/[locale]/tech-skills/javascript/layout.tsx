"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./layout.module.css";
const links = [
  { href: "/tech-skills/javascript/dom", label: "DOM" },
  { href: "/tech-skills/javascript/locale-storage", label: "Locale storage" },
  { href: "/tech-skills/javascript/to-event-timer", label: "To event timer" },
  { href: "/tech-skills/javascript/async-await", label: "Async-await" },
  { href: "/tech-skills/javascript/todo-list", label: "Todo List" },
];

export default function JavaScriptLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="tech-layout">
      
        <ul className={css.javaScriptList}>
          {links.map(({ href, label }) => (
            <li className={css.javaScriptLink} key={href}>
              <Link href={href} className={pathname === href ? "active" : ""}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
     
      <section className="content">{children}</section>
    </div>
  );
}