import SkillsCard from './SkillsCard';
import PhotoCard from './PhotoCard';
import './Skill.scss';

export default function Skills(props) {
  return (
    <section id={props.id} className="Skills">
      <h2>Skills</h2>

      <div>
        <SkillsCard />
        <PhotoCard />
      </div>
    </section>
  );
}
