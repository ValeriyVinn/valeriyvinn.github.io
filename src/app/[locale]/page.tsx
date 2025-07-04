"use client";

import Name from "@/components/Name/Name";
// import css from "./page.module.css";
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

import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <>
      <h1>{t("title")}</h1>
      <Photo />
      <Name name={t("name")}/>
      <Profession />
      <Summary />
      <TechScills />
      <SoftSkills />
      <Projects />
      <WorkExperience />
      <Education />
      <Languages />
      <Contacts />
    </>
  );
}
