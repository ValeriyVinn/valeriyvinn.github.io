import ProfileLinks from "../ProfileLinks/ProfileLinks";
import css from "./Footer.module.css";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";

export default function FooterMobile() {
  return (
    <div className={css.footerMobile}>
      <ul className={css.footerMobileList}>
        <li className={css.footerMobileItem}>
          <div className={css.contactLine}>
            <IoMailOutline className={css.icon} />
            <a href="mailto:valeriy.all@gmail.com" className={css.link}>
              valeriy.all@gmail.com
            </a>
          </div>
        </li>

        <li className={css.footerMobileItem}>
          <div className={css.contactLine}>
            <IoCallOutline className={css.icon} />
            <a href="tel:+380123456789">+38 (012) 345 67 89</a>
          </div>
        </li>
        <li className={css.footerProfileLnks}>
          <ProfileLinks />
        </li>
      </ul>
    </div>
  );
}
