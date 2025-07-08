"use client";

import FooterTypes from "./FooterTypes";
import { useTranslations } from "next-intl";

import css from "./Footer.module.css";


export default function Footer() {
  const t = useTranslations("HomePage");
  return (
    <div className={css.footer}>
      <FooterTypes
        contacts={{
          connections: {
            label: t("contacts.connections.label"),
           
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
    </div>
  );
}
