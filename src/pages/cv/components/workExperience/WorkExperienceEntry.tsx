import { ReactNode } from 'react';
import { Box, HStack, Heading, Text } from '@chakra-ui/react';
import TagList from '../tags/TagList';

const WorkExperienceEntry = (props: {
  company: ReactNode;
  position: ReactNode;
  period: ReactNode;
  tags?: string[];
  children?: ReactNode;
}) => (
  <Box marginBottom="1em">
    <HStack justify="space-between" align="center">
      <Box>
        <Heading size="md">{props.company}</Heading>
        <Text>{props.position}</Text>
        <Text>{props.period}</Text>
      </Box>
      {props.tags && <TagList tags={props.tags} />}
    </HStack>
    <Box>{props.children}</Box>
  </Box>
);

export default WorkExperienceEntry;
