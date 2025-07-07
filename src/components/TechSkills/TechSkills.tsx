import Link from "next/link";
import css from "./TechSkills.module.css";

type SkillLink = {
  label: string;
  href: string;
};

type TechSkillsProps = {
  title: string;
  links: SkillLink[];
};

export default function TechSkills({ title, links }: TechSkillsProps) {
  return (
    <div className={css.techSkills}>
      <h2>{title}</h2>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
