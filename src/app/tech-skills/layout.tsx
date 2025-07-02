"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/tech-skills/css", label: "CSS" },
  { href: "/tech-skills/java-script", label: "JavaScript" },
  { href: "/tech-skills/react", label: "React" },
  { href: "/tech-skills/redux", label: "Redux" },
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
        <ul>
          {links.map(({ href, label }) => (
            <li key={href}>
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
