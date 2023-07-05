import styled from 'styled-components';
import Tag from '../tags/Tag';

const StyledSkill = styled.div`
  margin: 0.8em 0;
  width: 100%;
`;

const TechSkill = (props: { name: string; tagSlug?: string; children: React.ReactNode }) => (
  <StyledSkill>
    <Tag slug={props.tagSlug || props.name} name={props.name} />: {props.children}
  </StyledSkill>
);

export default TechSkill;
