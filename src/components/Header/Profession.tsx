import ProfileLinks from "../ProfileLinks/ProfileLinks";
import css from "./Profession.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Profession({ profession }: { profession: string }) {
  return (
    <div className={css.profession}>
      <h3>{profession}</h3>
      <ProfileLinks
        links={[
          {
            label: "GitHub",
            url: "https://github.com/ValeriyVinn",
            icon: <FaGithub />,
          },
          {
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/valeriy-svystun-06b685273/",
            icon: <FaLinkedin />,
          },
        ]}
      />
    </div>
  );
}
