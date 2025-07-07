import css from "./Profession.module.css";

export default function Profession({ profession }: { profession: string }) {
  return (
    <div className={css.profession}>
      <h2>{ profession}</h2>
    </div>
  );
}
