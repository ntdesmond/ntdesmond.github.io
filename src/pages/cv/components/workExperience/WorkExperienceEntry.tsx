import styled from "styled-components";
import {
  InTextHeading,
  InTextSubheading,
} from "../../../../components/typography/Headings";
import Tag, { TagsWrapper } from "../tags/Tag";

const StyledEntry = styled.div<{ hasTags: boolean }>`
  display: grid;
  grid-template:
    "${(props) => (props.hasTags ? "info tags" : "info info")}"
    "content content" /
    auto 10em;
`;

const StyledInfoBlock = styled.div`
  grid-area: info;
`;

const StyledContent = styled.div`
  grid-area: content;
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
  <StyledEntry hasTags={!!props.tags}>
    <StyledInfoBlock>
      <InTextHeading>{props.position}</InTextHeading>
      <StyledCompany>{props.company}</StyledCompany>
      <p>{props.period}</p>
    </StyledInfoBlock>
    {props.tags && (
      <TagsWrapper>
        {props.tags.map((tag) => (
          <Tag name={tag} key={tag} />
        ))}
      </TagsWrapper>
    )}
    <StyledContent>
      <InTextSubheading>Responsibilities:</InTextSubheading>
      {props.children}
    </StyledContent>
  </StyledEntry>
);

export default WorkExperienceEntry;
