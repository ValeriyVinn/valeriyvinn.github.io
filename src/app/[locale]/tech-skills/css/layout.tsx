"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./layout.module.css";
const links = [
  { href: "/tech-skills/css/flex", label: "Flex" },
  { href: "/tech-skills/css/grid", label: "Grid" },
  { href: "/tech-skills/css/transition", label: "Transitions" },
  { href: "/tech-skills/css/animation", label: "Animations" },
];

export default function CssLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className={css.techLayout}>
      
        <ul className={css.cssList}>
          {links.map(({ href, label }) => (
            <li className={css.cssLink} key={href}>
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
