"use client";

import MobileLayout from "@/Components/MobileLayout/MobileLayout";
import DesktopLayout from "@/Components/DesktopLayout/DesktopLayout";
import { useTranslations } from "next-intl";

import css from "./page.module.css";


export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <>
      <div className={css.mobile}>
        <MobileLayout t={t} />
      </div>
      <div className={css.desktop}>
        <DesktopLayout t={t} />
      </div>

    </>
  );
}
