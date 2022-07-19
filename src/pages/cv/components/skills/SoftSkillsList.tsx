const SoftSkillsList = (props: { skills: string[]; className?: string }) => (
  <ul className={props.className}>
    {props.skills.map((skill) => (
      <li key={skill}>{skill}</li>
    ))}
  </ul>
);

export default SoftSkillsList;
