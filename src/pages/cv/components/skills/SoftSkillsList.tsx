import { ReactNode } from 'react';
import BulletPoint from './BulletPoint';

const SoftSkillsList = (props: { skills: ReactNode[]; className?: string }) => (
  <div className={props.className}>
    {props.skills.map((skill) => (
      <BulletPoint key={skill as string}>{skill}</BulletPoint>
    ))}
  </div>
);

export default SoftSkillsList;
