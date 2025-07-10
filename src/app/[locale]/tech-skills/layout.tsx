"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./layout.module.css";
const links = [
  { href: "/", label: "Home" },
  { href: "/tech-skills/css", label: "CSS" },
  { href: "/tech-skills/javascript", label: "Java Script" },
  { href: "/tech-skills/typescript", label: "Type Script" },
  { href: "/tech-skills/react", label: "React" },
  { href: "/tech-skills/redux", label: "Redux" },
  { href: "/tech-skills/next-js", label: "Next.Js" },
  { href: "/tech-skills/node-js", label: "Node.Js" },
];

export default function TechSkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="tech-layout">
      <aside className="sidebar">
        <ul className={css.techSkillsList}>
          {links.map(({ href, label }) => (
            <li className={css.techSkillsLink} key={href}>
              <Link href={href} className={pathname === href ? "active" : ""}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <section className="content">{children}</section>
    </div>
  );
}
