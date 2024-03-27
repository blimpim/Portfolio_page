import { skills } from './skillList';

export default function SkillsCard() {
  return (
    <section className="skillsCard">
      <h3>Skills</h3>
      <div>
        <ul>
          {skills.map((skill) => (
            <li key={skill.name}>{skill.name.toUpperCase()}</li>
          ))}
        </ul>
        
      </div>
    </section>
  );
}
