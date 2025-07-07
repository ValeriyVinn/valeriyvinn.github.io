import css from "./Education.module.css";


type EducationItem = {
  institution: string;
  faculty: string;
  period: string;
};

type EducationProps = {
  title: string;
  items: EducationItem[];
};

export default function Education({ title, items }: EducationProps) {
  return (
    <div className={css.name}>
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <h3>{item.institution}</h3>
            <p>{item.faculty}</p>
            <p>{item.period}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

