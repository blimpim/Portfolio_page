import './Header.scss';

export default function Header() {
  return (
    <section className={'header'}>
      <div className="leftSide">
        <a href="/src/App/<Skills/>">Skills</a>
        <a href="/src/App/<Works/>">Works</a>
        <a href="<Contact/>">Contact</a>
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
