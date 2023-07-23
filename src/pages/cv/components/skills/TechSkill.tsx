import { Text } from '@chakra-ui/react';
import Tag from '../tags/Tag';

const TechSkill = (props: { name: string; tagSlug?: string; children: React.ReactNode }) => (
  <Text>
    <Tag slug={props.tagSlug} name={props.name} />: {props.children}
  </Text>
);

export default TechSkill;
