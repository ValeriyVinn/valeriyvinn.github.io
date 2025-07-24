import ProfileLinks from "../ProfileLinks/ProfileLinks";
import css from "./Footer.module.css";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";

export default function FooterMobile() {
  return (
    <div className={css.footerMobile}>
      <ul className={css.footerMobileList}>
        <li className={css.footerMobileItem}>
          <IoMailOutline className={css.icon} />
          <a href="mailto:valeriy.all@gmail.com" className={css.linkMail}>
            valeriy.all@gmail.com
          </a>
        </li>

        <li className={css.footerMobileItem}>
          <IoCallOutline className={css.icon} />
          <a href="tel:+380123456789" className={css.linkPhone}>
            +38 (012) 345 67 89
          </a>
        </li>
      </ul>
      <div className={css.footerProfileLnks}>
        <ProfileLinks />
      </div>
    </div>
  );
}
