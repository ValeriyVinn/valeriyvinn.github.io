import css from "./Languages.module.css";

type LanguageListProps = {
  title: string;
  languages: string[];
};

export default function Languages({ title, languages }: LanguageListProps) {
  return (
    <div className={css.languages}>
      <h2>{title}</h2>
      <ul>
        {languages.map((lang, i) => (
          <li key={i}>{lang}</li>
        ))}
      </ul>
    </div>
  );
}
