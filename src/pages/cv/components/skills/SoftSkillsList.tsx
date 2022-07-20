import Skill from './Skill';

const SoftSkillsList = (props: { skills: string[]; className?: string }) => (
  <div className={props.className}>
    {props.skills.map((skill) => (
      <Skill key={skill}>{skill}</Skill>
    ))}
  </div>
);

export default SoftSkillsList;
