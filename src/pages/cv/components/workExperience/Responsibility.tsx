import React from 'react';
import { FlexRow } from '../../../../components/layout/alignment/Flex';
import TagList from '../tags/TagList';

const Responsibility = (props: { children: React.ReactNode; tags: string[] }) => (
  <FlexRow gap="0.5em" justify="space-between">
    <div>{props.children}</div>
    <TagList width="10em" tags={props.tags} print />
  </FlexRow>
);

export default Responsibility;
