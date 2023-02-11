import { ReactNode } from 'react';
import styled from 'styled-components';
import { FlexRow } from '../../../../components/layout/alignment/Flex';
import { InTextHeading, InTextSubHeading } from '../../../../components/typography/Headings';
import LanguageFragment from '../LanguageFragment';
import TagList from '../tags/TagList';

const StyledEntry = styled.div`
  margin-bottom: 1em;

  @media print {
    margin-bottom: 0.4em;
  }
`;

const StyledPosition = styled.p`
  font-weight: 500;
`;

const WorkExperienceEntry = (props: {
  company: ReactNode;
  position: ReactNode;
  period: ReactNode;
  tags?: string[];
  children?: ReactNode;
}) => (
  <StyledEntry>
    <FlexRow gap="1em" justify="space-between" align="center">
      <div>
        <InTextHeading>{props.company}</InTextHeading>
        <StyledPosition>{props.position}</StyledPosition>
        <p>{props.period}</p>
      </div>
      {props.tags && <TagList width="8em" tags={props.tags} />}
    </FlexRow>
    <div>
      <InTextSubHeading>
        <LanguageFragment en="Responsibilities:" ru="Обязанности:" />
      </InTextSubHeading>
      {props.children}
    </div>
  </StyledEntry>
);

export default WorkExperienceEntry;
