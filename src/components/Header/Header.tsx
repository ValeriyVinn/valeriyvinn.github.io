"use client";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import Name from "./Name";
import Photo from "./Photo";
import Profession from "./Profession";
import css from "./Header.module.css";

export default function Header() {
  const t = useTranslations("HomePage");

  return (
    <header className={ `${css.header} container` }>
      <div>
        <Photo />
      </div>
      <div className={css.localeSwitcher}>
        <LocaleSwitcher />
      </div>

      <div className={css.nameBlock}>
        <Name name={t("name")} />
        <Profession profession={t("profession")} />
      </div>
    </header>
  );
}
