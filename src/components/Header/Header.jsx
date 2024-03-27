import { Link } from 'react-scroll';

import './Header.scss';


export default function Header() {
  return (
    <section className={'header'}>
      <div className="leftSide">
        <Link to="skillsSection" smooth={true} duration={500}>Skills</Link>
        <Link to="worksSection" smooth={true} duration={500}>Projects</Link>
        <Link to="contactSection" smooth={true} duration={500}>Contact</Link>
      </div>
      <div className="frontDev">
        <h1 id={'front'}>FRONTEND </h1>
        <h1 id={'dev'}>DEVELOPER</h1>
      </div>
      <div className="rightSide">
        <a href="blimpim@gmail.com">blimpim@gmail.com</a>
        <a href="+1 949 629 8242">+1 949 629 8242</a>
      </div>
    </section>
  );
}
