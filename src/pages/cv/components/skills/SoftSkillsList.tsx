import { useContext } from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import LanguageFragment from '../../types/LanguageFragment';
import BulletPoint from './BulletPoint';

const SoftSkillsList = (props: { skills: LanguageFragment[]; className?: string }) => {
  const language = useContext(LanguageContext);
  return (
    <div className={props.className}>
      {props.skills.map((skill) => (
        <BulletPoint key={skill.get(language) as string}>{skill.get(language)}</BulletPoint>
      ))}
    </div>
  );
};

export default SoftSkillsList;
