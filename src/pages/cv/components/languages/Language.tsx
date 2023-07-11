import { Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

const Language = (props: { name: ReactNode; level: ReactNode }) => (
  <Text>
    <b>{props.name}</b>: {props.level}
  </Text>
);

export default Language;
