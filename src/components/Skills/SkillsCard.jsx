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
        <p>
          Experienced in both team work and solo development Skilled in guiding projects from start to successful
          completion Quick learner, deadline-driven, and accountable
        </p>
      </div>
    </section>
  );
}
