import ProfileLinks from "../ProfileLinks/ProfileLinks";
import css from "./Profession.module.css";


export default function Profession({ profession }: { profession: string }) {
  return (
    <div className={css.profession}>
      <h3>{profession}</h3>
      <div className={css.profileLinks}><ProfileLinks /></div>
      
    </div>
  );
}
