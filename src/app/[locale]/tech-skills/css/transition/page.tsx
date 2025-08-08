import css from "./page.module.css";

export default function Transiton() {
  return (
    <div>
      <h2 className={css.header}>Transition</h2>

<div className={css.transitionContainer}>
  <div className={css.leftLeaf}></div>
  <div className={css.rightLeaf}></div>
</div>


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
