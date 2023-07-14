import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import TagList from '../tags/TagList';

const Responsibility = (props: { children: React.ReactNode; tags: string[] }) => (
  <HStack justify="space-between">
    <Box>{props.children}</Box>
    <TagList tags={props.tags} print />
  </HStack>
);

export default Responsibility;
