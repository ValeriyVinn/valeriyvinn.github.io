import css from "./Education.module.css";
export default function Education() {
  return (
    <div className={css.name}>
      <h2>Education</h2>
      <ul>
        <li>
          <h3>GoIT</h3>
          <p>FullStack Developer</p>
          <p>2022 - 2023 | Ukraine </p>
        </li>
        <li>
          <h3> Vinnytsia National Agrarian University </h3>
          <p> Faculty of Agronomy and Forestry, Agronomy </p>
          <p> 1998-2004 | Ukraine </p>
        </li>
      </ul>
    </div>
  );
}
