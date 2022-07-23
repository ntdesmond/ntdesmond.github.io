import styled from 'styled-components';
import TagList from '../tags/TagList';

const StyledEntry = styled.div<{ hasTags: boolean }>`
  display: grid;
  grid-template-areas: '${(props) => (props.hasTags ? 'info tags' : 'info info')}';
  grid-template-columns: auto 8em;
  gap: 1em;
  margin: 1em 0 1em;
`;

const StyledInfoBlock = styled.div`
  grid-area: info;
`;

const StyledProjectName = styled.p`
  font-weight: bold;
`;

const Project = (props: {
  title: string;
  description: string;
  period: string;
  href?: string;
  tags?: string[];
}) => (
  <StyledEntry hasTags={!!props.tags}>
    <StyledInfoBlock>
      <StyledProjectName>
        {props.href ? (
          <a href={props.href} target="_blank" rel="noreferrer">
            {props.title}
          </a>
        ) : (
          props.title
        )}
      </StyledProjectName>
      <p>{props.description}</p>
      <p>{props.period}</p>
    </StyledInfoBlock>
    {props.tags && <TagList tags={props.tags} />}
  </StyledEntry>
);

export default Project;
