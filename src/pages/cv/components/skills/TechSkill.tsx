import styled from 'styled-components';
import Tag from '../tags/Tag';
import Level from './Level';

const StyledSkill = styled.div`
  display: grid;
  grid-template:
    'name level'
    'content content' /
    8em auto;
  align-items: center;
  margin: 0.8em 0;
  width: 100%;
`;

const StyledChildren = styled.div`
  grid-area: content;
  margin: 0.5em 0 1em;
`;

const StyledTag = styled(Tag)`
  grid-area: name;
`;

const StyledLevel = styled(Level)`
  grid-area: level;
`;

const TechSkill = (props: {
  name: string;
  tagSlug?: string;
  value: number;
  children?: React.ReactNode;
}) => (
  <StyledSkill>
    <StyledTag slug={props.tagSlug || props.name} name={props.name} />
    <StyledLevel value={props.value} />
    {props.children && <StyledChildren>{props.children}</StyledChildren>}
  </StyledSkill>
);

export default TechSkill;
