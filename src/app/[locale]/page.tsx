"use client";

import Name from "@/components/Name/Name";
// import css from "./page.module.css";
import Profession from "@/components/Profession/Profession";
import Summary from "@/components/Summary/Summary";
import TechSkills from "@/components/TechSkills/TechSkills";
import Contacts from "@/components/Contacts/Contacts";
import SoftSkills from "@/components/SoftSkills/SoftSkills";
import Languages from "@/components/Languages/Languages";
import Projects from "@/components/Projects/Projects";
import Education from "@/components/Education/Education";
import WorkExperience from "@/components/WorkExperience/WorkExperience";
import Photo from "@/components/Photo/Photo";

import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <>
      <h1>{t("title")}</h1>
      <Photo />
      <Name name={t("name")} />
      <Profession profession={t("profession")} />
      <Summary summary={t("summary")} />
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

      <Languages
        title={t("languages.title")}
        languages={[
          t("languages.english"),
          t("languages.ukrainian"),
          t("languages.russian"),
        ]}
      />
      <Contacts
        contacts={{
          connections: {
            label: t("contacts.connections.label"),
            value: t("contacts.connections.value"),
          },
          phone: {
            label: t("contacts.phone.label"),
            value: t("contacts.phone.value"),
          },
          email: {
            label: t("contacts.email.label"),
            value: t("contacts.email.value"),
          },
          linkedin: {
            label: t("contacts.linkedin.label"),
            url: t("contacts.linkedin.url"),
          },
          gitHub: {
            label: t("contacts.gitHub.label"),
            url: t("contacts.gitHub.url"),
          },
          address: {
            label: t("contacts.address.label"),
            value: t("contacts.address.value"),
          },
        }}
      />
    </>
  );
}
