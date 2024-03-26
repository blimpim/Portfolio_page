import { Link } from 'react-scroll';

import './MainSection.scss';
import Button from '../Button/Button';
import Media from '../Media/Media';

export default function MainSection() {
  return (
    <section className="main-bg">
      <div className="mainSection">
        <h1>MARIIA MERKULOVA</h1>
        <div>
          <div>
            <Link to="contactSection"  smooth={true} duration={500}><Button>Contact me</Button></Link>
            <Button><a href='https://drive.google.com/uc?export=download&id=1frjTIhsrcUGHZiOt5pZy7sgw5GCh8VvD'>Download CV 
</a></Button>
          </div>

          <Media fill="#5BE8D4" className="_Main"></Media>
        </div>
      </div>
    </section>
  );
}
