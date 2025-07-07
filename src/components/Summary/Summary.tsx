import css from "./Summary.module.css";

export default function Summary({ summary }: { summary: string }) {
  return (
    <div className={css.summary}>
      <p>{summary}</p>
    </div>
  );
}
