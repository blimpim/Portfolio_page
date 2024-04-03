import Button from '../Button/Button';
import Media from '../Media/Media';
import Header from '../Header/Header';

import { Link } from 'react-scroll';
import styles from './MainSection.module.scss';

export default function MainSection() {
  return (
    <section className={styles.section}>
      <Header />
      <header className={styles.header}>
        <h1>
          MARIIA <br /> MERKULOVA
        </h1>
      </header>

      <div>
        <div>
          <Link to="contactSection" smooth={true} duration={500}>
            <Button>Contact me</Button>
          </Link>

          <Button>
            <a href="https://drive.google.com/uc?export=download&id=1frjTIhsrcUGHZiOt5pZy7sgw5GCh8VvD">Download CV</a>
          </Button>
        </div>

        <Media fill="#5BE8D4" className="_Main"></Media>
      </div>
    </section>
  );
}
