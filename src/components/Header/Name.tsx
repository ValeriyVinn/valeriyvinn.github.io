
import css from "./Name.module.css";

type Props = {
  name: string;
};

export default function Name({ name }: Props) {
  return (
    <div className={css.name}>
      <h1>{name}</h1>
    </div>
  );
}
