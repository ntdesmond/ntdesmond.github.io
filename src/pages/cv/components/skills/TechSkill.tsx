import { Text } from '@chakra-ui/react';
import Tag from '../tags/Tag';

// const StyledSkill = styled.div`
//   margin: 0.8em 0;
//   width: 100%;
// `;

const TechSkill = (props: { name: string; tagSlug?: string; children: React.ReactNode }) => (
  <Text>
    <Tag slug={props.tagSlug || props.name} name={props.name} />: {props.children}
  </Text>
);

export default TechSkill;
