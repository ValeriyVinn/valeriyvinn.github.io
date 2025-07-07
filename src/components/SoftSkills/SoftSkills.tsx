import css from "./SoftSkills.module.css";

type SoftSkillsProps = {
  title: string;
  skills: string[];
};
export default function SoftSkills({ title, skills }: SoftSkillsProps) {
  return (
    <div className={css.softSkills}>
      <h2>{title}</h2>
      <ul>
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
