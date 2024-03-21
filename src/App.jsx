import Header from './components/Header/Header';
import MarqueeLine from './components/Marquee/MarqueeLine';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import ButtonUp from './components/Button/ButtonUp';
import MainSection from './components/MainSection/MainSaction';

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <div className="bg-img ">
          <Header />
          <MainSection />
        </div>
        <MarqueeLine el1="Let’s  do smth special" el2="text me now" el3="let’s do a team" />
        <div>
          <Skills />
          <MarqueeLine el1="Works" el2="Works" el3="Works" />
          <Works />
          <MarqueeLine el1="CONTACT" el2="CONTACT" el3="CONTACT" />
          <Contact />
          <ButtonUp />
        </div>
      </main>
    </>
  );
}
