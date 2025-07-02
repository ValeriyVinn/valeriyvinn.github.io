import Name from "@/components/Name/Name";
import css from "./page.module.css";
import Profession from "@/components/Profession/Profession";
import Summary from "@/components/Summary/Summary";
import TechScills from "@/components/TechSkills/TechSkills";
import Contacts from "@/components/Contacts/Contacts";
import SoftSkills from "@/components/SoftSkills/SoftSkills";
import Languages from "@/components/Languages/Languages";
import Projects from "@/components/Projects/Projects";
import Education from "@/components/Education/Education";
import WorkExperience from "@/components/WorkExperience/WorkExperience";
import Photo from "@/components/Photo/Photo";

export default function HomePage() {
  return (
    <main className={css.resume}>
      <Photo/>
      <Name />
      <Profession />
      <Summary />
      <TechScills />
      <SoftSkills />
      <Projects />
      <WorkExperience />
      <Education />
      <Languages />
      <Contacts />
    </main>
  );
}
