import Name from "@/components/Name/Name";
import css from "./page.module.css";
import Profession from "@/components/Profession/Profession";
import Summary from "@/components/Summary/Summary";

export default function HomePage() {
  return (
    
    <main className={css.resume}>
      <div className={css.photo}>Фото</div>
      <div className={css.name}><Name/></div>
      <div className={css.profession}><Profession/></div>
      <div className={css.summary}><Summary/></div>
      <div className={css.techSkills}>Tech Skills</div>
      <div className={css.softSkills}>Soft Skills</div>
      <div className={css.projects}>Projects</div>
      <div className={css.workExperience}>Work Experience</div>
      <div className={css.education}>Education</div>
      <div className={css.languages}>Languages</div>
      <div className={css.contacts}>Contacts</div>
    </main>
  );
}
