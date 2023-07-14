import { ReactNode } from 'react';
import { Box, HStack, Heading, Link, Text } from '@chakra-ui/react';
import TagList from '../tags/TagList';

const Project = (props: {
  title: string;
  description: ReactNode;
  period: ReactNode;
  href?: string;
  tags?: string[];
}) => (
  <HStack justify="space-between" align="center">
    <Box>
      <Heading size="md">
        {props.href ? (
          <Link href={props.href} isExternal>
            {props.title}
          </Link>
        ) : (
          props.title
        )}
      </Heading>
      <Text>{props.description}</Text>
      <Text>{props.period}</Text>
    </Box>
    {props.tags && (
      <Box width="10em">
        <TagList tags={props.tags} print />
      </Box>
    )}
  </HStack>
);

export default Project;
