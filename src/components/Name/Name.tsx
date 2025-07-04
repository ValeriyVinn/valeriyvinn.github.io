import css from "./Name.module.css";


export default function Name({ name }: { name: string }) {
  return (
    <div className={css.name}>
      <h1>{ name}</h1>
    </div>
  );
}