import styled from 'styled-components';
import TagList from '../tags/TagList';

const StyledEntry = styled.div<{ hasTags: boolean }>`
  display: grid;
  grid-template:
    '${(props) => (props.hasTags ? 'info tags' : 'info info')}' /
    auto 6em;
`;

const StyledInfoBlock = styled.div`
  grid-area: info;
`;

const StyledProjectName = styled.p`
  font-weight: bold;
`;

const ProjectEntry = (props: {
  title: string;
  description: string;
  period: string;
  href?: string;
  tags?: string[];
}) => (
  <StyledEntry hasTags={!!props.tags}>
    <StyledInfoBlock>
      <StyledProjectName>
        {props.href ? <a href={props.href}>{props.title}</a> : props.title}
      </StyledProjectName>
      <p>{props.description}</p>
      <p>{props.period}</p>
    </StyledInfoBlock>
    {props.tags && <TagList tags={props.tags} />}
  </StyledEntry>
);

export default ProjectEntry;
