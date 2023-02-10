import { ReactNode } from 'react';
import styled from 'styled-components';
import { FlexRow } from '../../../../components/layout/alignment/Flex';
import ExternalURL from '../../../../components/UI/ExternalURL';
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
  description: ReactNode;
  period: ReactNode;
  href?: string;
  tags?: string[];
}) => (
  <StyledEntry gap="1em" justify="space-between">
    <div>
      <StyledProjectName>
        {props.href ? <ExternalURL href={props.href}>{props.title}</ExternalURL> : props.title}
      </StyledProjectName>
      <p>{props.description}</p>
      <p>{props.period}</p>
    </div>
    {props.tags && <TagList width="8em" tags={props.tags} />}
  </StyledEntry>
);

export default Project;
