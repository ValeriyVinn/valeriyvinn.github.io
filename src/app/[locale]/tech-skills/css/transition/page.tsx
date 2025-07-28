import css from "./page.module.css";

export default function Transiton() {
  return (
    <div>
      <h2 className={css.header}>Transition</h2>

      <ul className={css.underlineMenu}>
        <li>
          <a href="" className={css.underlineMenuLink}>
            Link 1
          </a>
        </li>
        <li>
          <a href="" className={css.underlineMenuLink}>
            Link 2
          </a>
        </li>
        <li>
          <a href="" className={css.underlineMenuLink}>
            Link 3
          </a>
        </li>
      </ul>
    </div>
  );
}
