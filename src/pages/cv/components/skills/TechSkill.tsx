import styled from 'styled-components';
import Tag from '../tags/Tag';

const StyledSkill = styled.div`
  margin: 0.8em 0;
  width: 100%;
`;

const StyledChildren = styled.div`
  margin: 0.5em 0 1em;
`;

const StyledTag = styled(Tag)`
  font-weight: medium;
  font-size: 1.2em;
`;

const TechSkill = (props: {
  name: string;
  tagSlug?: string;
  children: React.ReactNode;
}) => (
  <StyledSkill>
    <StyledTag slug={props.tagSlug || props.name} name={props.name} />
    {props.children && <StyledChildren>{props.children}</StyledChildren>}
  </StyledSkill>
);

export default TechSkill;
