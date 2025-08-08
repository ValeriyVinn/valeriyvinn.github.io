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
          <a href="tel:+380972575380" className={css.linkPhone}>
            +38 (097) 257 53 80
          </a>
        </li>
      </ul>
      <div className={css.footerProfileLnks}>
        <ProfileLinks />
      </div>
    </div>
  );
}
