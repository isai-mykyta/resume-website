import { FC } from "react";

type SkillsProps = {
  type: string;
  skills: string[];
}

const Skills: FC<SkillsProps> = ({ type, skills }) => {
  return (
    <div className="skills">
      <p className="skills__type">{type}</p>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li className="skill" key={`${type}-${skill}`}><p>{skill}</p></li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
