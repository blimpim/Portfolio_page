import MarqueeLine from './components/Marquee/MarqueeLine';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import ButtonUp from './components/Button/ButtonUp';
import MainSection from './components/MainSection/MainSection';

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <MainSection />
        <MarqueeLine el1="Let’s  do something special" el2="text me now" el3="let’s make a team" />
        <div>
          <Skills id="skillsSection" />
          <MarqueeLine el1="Project" el2="Project" el3="Project" />
          <Works id="worksSection" />
          <MarqueeLine el1="CONTACT" el2="CONTACT" el3="CONTACT" />
          <Contact id="contactSection" />
          <ButtonUp />
        </div>
      </main>
    </>
  );
}
