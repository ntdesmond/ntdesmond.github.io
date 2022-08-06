import { useContext } from 'react';
import styled from 'styled-components';
import { FlexRow } from '../../../../components/layout/alignment/Flex';
import ExternalURL from '../../../../components/UI/ExternalURL';
import LanguageContext from '../../contexts/LanguageContext';
import LanguageFragment from '../../types/LanguageFragment';
import TagList from '../tags/TagList';

const StyledEntry = styled(FlexRow)`
  margin-bottom: 1em;

  @media print {
    margin-bottom: 0.5em;
  }
`;

const StyledProjectName = styled.p`
  font-weight: bold;
`;

const Project = (props: {
  title: string;
  description: LanguageFragment;
  period: LanguageFragment;
  href?: string;
  tags?: string[];
}) => {
  const language = useContext(LanguageContext);
  return (
    <StyledEntry gap="1em" justify="space-between">
      <div>
        <StyledProjectName>
          {props.href ? <ExternalURL href={props.href}>{props.title}</ExternalURL> : props.title}
        </StyledProjectName>
        <p>{props.description.get(language)}</p>
        <p>{props.period.get(language)}</p>
      </div>
      {props.tags && <TagList width="8em" tags={props.tags} />}
    </StyledEntry>
  );
};

export default Project;
