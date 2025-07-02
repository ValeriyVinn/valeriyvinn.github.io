import Link from "next/link";
import css from "./TechSkills.module.css";

export default function TechScills() {
  return (
      <div className={css.techSkills}>
          <h2>Tech Skills</h2>
      <ul>
        <li>
          <Link href="/tech-skills/css">CSS</Link>
        </li>
        <li>
          <Link href="/tech-skills/java-script">JavaScript</Link>
        </li>
        <li>
          <Link href="/tech-skills/react">React</Link>
        </li>
        <li>
          <Link href="/tech-skills/redux">Redux</Link>
        </li>
      </ul>
    </div>
  );
}
