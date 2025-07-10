import Education from "../Education/Education";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import Name from "../Name/Name";
import Photo from "../Photo/Photo";
import Profession from "../Profession/Profession";
import Languages from "../Languages/Languages";
import Projects from "../Projects/Projects";
import SoftSkills from "../SoftSkills/SoftSkills";
import Summary from "../Summary/Summary";
import TechSkills from "../TechSkills/TechSkills";
import WorkExperience from "../WorkExperience/WorkExperience";
import css from "./DesktopLayout.module.css";
import FooterMobile from "../Footer/Footer";

type TFunction = (key: string) => string;

export default function DesktopLayout({ t }: { t: TFunction }) {
  return (
    <div className={css.layout}>
      <aside className={css.aside}>
        <header className={css.header}>
          <Photo />
        </header>
        <div>
          <TechSkills
            title={t("techSkills.title")}
            links={[
              { label: "CSS", href: "/tech-skills/css" },
              { label: "Java Script", href: "/tech-skills/javascript" },
              { label: "Type Script", href: "/tech-skills/typescript" },
              { label: "React", href: "/tech-skills/react" },
              { label: "Redux", href: "/tech-skills/redux" },
              { label: "Next.js", href: "/tech-skills/nextjs" },
              { label: "Node.js", href: "/tech-skills/nodejs" },
            ]}
          />
          <SoftSkills
            title={t("skills.title")}
            skills={[
              t("skills.one"),
              t("skills.two"),
              t("skills.three"),
              t("skills.four"),
              t("skills.five"),
            ]}
          />
          <Languages
            title={t("languages.title")}
            languages={[
              t("languages.english"),
              t("languages.ukrainian"),
              t("languages.russian"),
            ]}
          />
        </div>
      </aside>

      <main className={css.main}>
        <div className={css.localeSwitcher}>
          <LocaleSwitcher />
        </div>
        <Name name={t("name")} />
        <Profession profession={t("profession")} />
        <Summary summary={t("summary")} />

        <Projects
          title={t("projects.title")}
          projects={[
            {
              title: t("projects.items.0.title"),
              githubUrl: t("projects.items.0.githubUrl"),
              projectUrl: t("projects.items.0.projectUrl"),
              techStack: t("projects.items.0.techStack").split(", "),
              description: t("projects.items.0.description"),
              role: t("projects.items.0.role"),
              contribution: t("projects.items.0.contribution"),
            },
            {
              title: t("projects.items.1.title"),
              githubUrl: t("projects.items.1.githubUrl"),
              projectUrl: t("projects.items.1.projectUrl"),
              techStack: t("projects.items.1.techStack").split(", "),
              description: t("projects.items.1.description"),
              role: t("projects.items.1.role"),
              contribution: t("projects.items.1.contribution"),
            },
            {
              title: t("projects.items.2.title"),
              githubUrl: t("projects.items.2.githubUrl"),
              projectUrl: t("projects.items.2.projectUrl"),
              techStack: t("projects.items.2.techStack").split(", "),
              description: t("projects.items.2.description"),
              role: t("projects.items.2.role"),
              contribution: t("projects.items.2.contribution"),
            },
          ]}
        />
        <WorkExperience
          title={t("workexpexperience.title")}
          items={[
            {
              institution: t("workexpexperience.item1.institution"),
              field1: t("workexpexperience.item1.field1"),
              field2: t("workexpexperience.item1.field2"),
              period: t("workexpexperience.item1.period"),
            },
            {
              institution: t("workexpexperience.item2.institution"),
              field1: t("workexpexperience.item2.field1"),
              field2: t("workexpexperience.item2.field2"),
              period: t("workexpexperience.item2.period"),
            },
            {
              institution: t("workexpexperience.item3.institution"),
              field1: t("workexpexperience.item3.field1"),
              field2: t("workexpexperience.item3.field2"),
              period: t("workexpexperience.item3.period"),
            },
          ]}
        />
        <Education
          title={t("education.title")}
          items={[
            {
              institution: t("education.item1.institution"),
              faculty: t("education.item1.faculty"),
              period: t("education.item1.period"),
            },
            {
              institution: t("education.item2.institution"),
              faculty: t("education.item2.faculty"),
              period: t("education.item2.period"),
            },
          ]}
        />
      </main>
      <footer>
        <FooterMobile />
      </footer>
    </div>
  );
}
