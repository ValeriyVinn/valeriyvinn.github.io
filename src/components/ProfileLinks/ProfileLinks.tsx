"use client";

import css from "./ProfileLinks.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function ProfileLinks() {
  

  return (
    <div className={css.profileLinks}>
      <ul className={css.list}>
        <li className={css.github}>
          <a
            href={"https://github.com/ValeriyVinn"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className={css.githubLink}
          >
            <FaGithub />
          </a>
        </li>
        <li className={css.linkedin}>
          <a
            href={"https://www.linkedin.com/in/valeriy-svystun-06b685273/"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin"
            className={css.linkedinLink}
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
}
