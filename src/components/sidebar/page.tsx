"use client";
import Image from "next/image";
import Link from "next/link";
import css from "./page.module.css"
export default function Sidebar() {
  return (
    <>
      <aside className={css.sidebarSection}>
        <Image src="/myPhoto.jpg" alt="Моє фото" width={300} height={300} />

        <div className={css.sidebarSectionsIndent}>
          <h3 className={css.sidebarTittle}>Contacts</h3>
          <ul>
            <li className={css.techSkillsItem}>
              <a className={css.contactsSectLink} href="tel:+380123456789">
                +38 012 345 67 89
              </a>
            </li>
            <li className={css.techSkillsItem}>
              <a
                className={css.contactsSectLink}
                href="mailto:valeriy.all@gmail.com"
              >
                valeriy.all@gmail.com
              </a>
            </li>

            <li className={css.techSkillsItem}>
              <a
                className={css.contactsSectLink}
                href="https://www.linkedin.com/in/valeriy-svystun-06b685273/"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li className={css.techSkillsItem}>
              <a
                className={css.contactsSectLink}
                href="https://github.com/ValeriyVinn?tab=repositories"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>

            <li className={css.techSkillsItem}>
              <p>Vinnytsia, Ukraine</p>
            </li>
          </ul>
        </div>

        <div className={css.sidebarSectionsIndent}>
          <h2 className={css.sidebarTittle}>Tech Skills</h2>

          <nav className={`${css.nav} ${css.sidebarSectionsIndent}`}>
            <Link href="" className={css.techSkillsItem}>
              HTML
            </Link>
            <Link href="" className={css.techSkillsItem}>
              CSS
            </Link>
            <Link href="/javascript" className={css.techSkillsItem}>
              JavaScript
            </Link>
            <Link href="" className={css.techSkillsItem}>
              React
            </Link>
            <Link href="" className={css.techSkillsItem}>
              TypeScript
            </Link>
          </nav>
        </div>

        <div
          className={`${css.sidebarSoftSkills} ${css.sidebarSectionsIndent}`}
        >
          <h3 className={`${css.sidebarSoftSkillsTittle} ${css.sidebarTittle}`}>
            Soft Skills
          </h3>

          <ul className={css.fish}>
            <li className={css.softSkillsItem}>
              <span className={css.softSkillsText}>
                Responsibility and persistence
              </span>
            </li>

            <li className={css.softSkillsItem}>
              <span className={css.softSkillsText}>Good communication</span>
            </li>
            <li className={css.softSkillsItem}>
              <span className={css.softSkillsText}>
                Striving for self-development &
              </span>
            </li>

            <li className={css.softSkillsItem}>
              <span className={css.softSkillsText}>
                Ability to self-organize
              </span>
            </li>

            <li className={css.softSkillsItem}>
              <span className={css.softSkillsText}>Flexibility</span>
            </li>
          </ul>
        </div>

        <div
          className={`${css.sidebarSoftSkills} ${css.sidebarSectionsIndent}`}
        >
          <h3 className={`${css.sidebarSoftSkillsTittle} ${css.sidebarTittle}`}>
            Languages
          </h3>

          <ul className={css.fish}>
            <li className={css.softSkillsItem}>
              <span className={css.softSkillsText}>
                English - Pre-intermediate
              </span>
            </li>
            <li className={css.softSkillsItem}>
              <span className={css.softSkillsText}>Ukrainian - Native</span>
            </li>
            <li className={css.softSkillsItem}>
              <span className={css.softSkillsText}>Russian - Fluent</span>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
