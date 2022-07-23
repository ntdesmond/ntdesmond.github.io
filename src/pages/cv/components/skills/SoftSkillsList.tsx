import BulletPoint from './BulletPoint';

const SoftSkillsList = (props: { skills: string[]; className?: string }) => (
  <div className={props.className}>
    {props.skills.map((skill) => (
      <BulletPoint key={skill}>{skill}</BulletPoint>
    ))}
  </div>
);

export default SoftSkillsList;
