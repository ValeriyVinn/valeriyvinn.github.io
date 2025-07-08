"use client";

import css from "./ProfileLinks.module.css";

// import { FaGithub, FaLinkedin } from "react-icons/fa";

type ProfileLink = {
  label: string;
  url: string;
  icon: React.ReactNode;
};

type ProfileLinksProps = {
  links: [ProfileLink, ProfileLink]; // саме два елементи — tuple
};

export default function ProfileLinks({ links }: ProfileLinksProps) {
  const [github, linkedin] = links;

  return (
    <div className={css.profileLinks}>
      <ul className={css.list}>
        <li className={css.github}>
          <a
            href={"https://github.com/ValeriyVinn"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={github.label}
            className={css.githubLink}
          >
            {github.icon}
          </a>
        </li>
        <li className={css.linkedin}>
          <a
            href={"https://www.linkedin.com/in/valeriy-svystun-06b685273/"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={linkedin.label}
            className={css.linkedinLink}
          >
            {linkedin.icon}
          </a>
        </li>
      </ul>
    </div>
  );
}
