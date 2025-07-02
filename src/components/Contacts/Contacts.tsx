import css from "./Contacts.module.css";

export default function Contacts() {
  return (
    <div className={css.contacts}>
      <h2>Contacts</h2>
      <ul>
        <li>+38 012 345 67 89</li>
        <li>valeriy.all@gmail.com</li>
        <li>Linkedin </li>
        <li>GitHub</li>
        <li>Vinnytsia, Ukraine</li>
      </ul>
    </div>
  );
}
