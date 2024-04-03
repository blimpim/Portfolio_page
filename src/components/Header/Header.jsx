import { Link } from 'react-scroll';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <nav className={styles.header}>
      <ul className={styles.leftSide}>
        <Link to="skillsSection" smooth={true} duration={500}>
          Skills
        </Link>
        <Link to="worksSection" smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="contactSection" smooth={true} duration={500}>
          Contact
        </Link>
      </ul>
      <h2 className={styles.frontDev}>FRONTEND DEVELOPER</h2>
      <div className={styles.rightSide}>
        <a href="blimpim@gmail.com">blimpim@gmail.com</a>
        <a href="+1 949 629 8242">+1 949 629 8242</a>
      </div>
    </nav>
  );
}
