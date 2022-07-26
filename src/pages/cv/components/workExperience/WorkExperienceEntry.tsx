import React, { useContext } from 'react';
import styled from 'styled-components';
import { FlexRow } from '../../../../components/layout/alignment/Flex';
import { InTextHeading, InTextSubheading } from '../../../../components/typography/Headings';
import LanguageContext from '../../contexts/LanguageContext';
import LanguageFragment from '../../types/LanguageFragment';
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
  company: LanguageFragment;
  position: LanguageFragment;
  period: LanguageFragment;
  tags?: string[];
  children?: React.ReactNode;
}) => {
  const language = useContext(LanguageContext);
  const responsibilities = new LanguageFragment({
    en: 'Responsibilities:',
    ru: 'Обязанности:',
  });

  return (
    <StyledEntry>
      <FlexRow gap="1em" justify="space-between">
        <div>
          <InTextHeading>{props.position.get(language)}</InTextHeading>
          <StyledCompany>{props.company.get(language)}</StyledCompany>
          <p>{props.period.get(language)}</p>
        </div>
        {props.tags && <TagList width="8em" tags={props.tags} />}
      </FlexRow>
      <div>
        <InTextSubheading>{responsibilities.get(language)}</InTextSubheading>
        {props.children}
      </div>
    </StyledEntry>
  );
};

export default WorkExperienceEntry;
