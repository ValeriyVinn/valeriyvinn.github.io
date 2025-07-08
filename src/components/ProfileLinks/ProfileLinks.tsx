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
            href={github.url}
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
            href={linkedin.url}
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
