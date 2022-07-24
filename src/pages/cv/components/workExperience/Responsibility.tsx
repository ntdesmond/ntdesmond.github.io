import React from 'react';
import { FlexRow } from '../../../../components/layout/alignment/Flex';
import TagList from '../tags/TagList';

const Responsibility = (props: { children: React.ReactNode; tags: string[] }) => (
  <FlexRow gap="1em" justify="space-betweeb">
    <div>{props.children}</div>
    <TagList width="8em" tags={props.tags} />
  </FlexRow>
);

export default Responsibility;
