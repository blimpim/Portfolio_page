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
            <Button>Contact me</Button>
            <Button>Download CV</Button>
          </div>

          <Media fill="#5BE8D4" className="_Main"></Media>
        </div>
      </div>
    </section>
  );
}
