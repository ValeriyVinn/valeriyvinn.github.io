"use client";

import MobileLayout from "@/components/MobileLayout/MobileLayout";
import DesktopLayout from "@/components/DesktopLayout/DesktopLayout";
import { useTranslations } from "next-intl";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import css from "./page.module.css";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <>
      <PageWrapper>
        <div className={css.mobile}>
          <MobileLayout t={t} />
        </div>
        <div className={css.desktop}>
          <DesktopLayout t={t} />
        </div>
      </PageWrapper>
    </>
  );
}
