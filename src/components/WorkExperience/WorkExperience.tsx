
import css from "./WorkExperience.module.css";

type WorkExperienceItem = {
  institution: string;
  field1: string;
  field2: string;
  period: string;
};

type WorkExperienceProps = {
  title: string;
  items: WorkExperienceItem[];
};

export default function WorkExperience({ title, items }: WorkExperienceProps) {
  return (
    <div className={css.name}>
      <div className={css.name}>
        <h2>{title}</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <h3>{item.institution}</h3>
              <p>{item.field1}</p>
              <p>{item.field2}</p>
              <p>{item.period}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
