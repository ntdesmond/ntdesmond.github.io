import React from 'react';
import { HStack } from '@chakra-ui/react';
import TagList from '../tags/TagList';

const Responsibility = (props: { children: React.ReactNode; tags: string[] }) => (
  <HStack justify="space-between">
    <div>{props.children}</div>
    <TagList tags={props.tags} print />
  </HStack>
);

export default Responsibility;
