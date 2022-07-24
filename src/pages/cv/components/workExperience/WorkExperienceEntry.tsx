import React from 'react';
import styled from 'styled-components';
import { FlexRow } from '../../../../components/layout/alignment/Flex';
import { InTextHeading, InTextSubheading } from '../../../../components/typography/Headings';
import TagList from '../tags/TagList';

const StyledEntry = styled.div`
  margin-bottom: 1em;

  @media print {
    margin-bottom: 0.5em;
  }
`;

const StyledCompany = styled.p`
  font-style: italic;
`;

const WorkExperienceEntry = (props: {
  company: string;
  position: string;
  period: string;
  tags?: string[];
  children?: React.ReactNode;
}) => (
  <StyledEntry>
    <FlexRow gap="1em" justify="space-between">
      <div>
        <InTextHeading>{props.position}</InTextHeading>
        <StyledCompany>{props.company}</StyledCompany>
        <p>{props.period}</p>
      </div>
      {props.tags && <TagList width="8em" tags={props.tags} />}
    </FlexRow>
    <div>
      <InTextSubheading>Responsibilities:</InTextSubheading>
      {props.children}
    </div>
  </StyledEntry>
);

export default WorkExperienceEntry;
