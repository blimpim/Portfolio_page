import SkillsCard from './SkillsCard';
import PhotoCard from './PhotoCard';
import './Skill.scss';

export default function Skills(props) {
  return (
    <section id={props.id}>
      <h2 id="skillHeader">About me & Skills</h2>

      <div className="Skills">
        <SkillsCard />
        <PhotoCard />
      </div>
    </section>
  );
}
