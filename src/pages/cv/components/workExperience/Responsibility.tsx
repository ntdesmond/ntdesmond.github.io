import styled from "styled-components";
import Tag, { TagsWrapper } from "../tags/Tag";

const StyledResponsibility = styled.div`
  display: grid;
  grid-template-columns: auto 6em;
`;

const Responsibility = (props: {
  children: React.ReactNode;
  tags: string[];
}) => (
  <StyledResponsibility>
    <div>{props.children}</div>
    <TagsWrapper>
      {props.tags.map((tag) => (
        <Tag name={tag} key={tag} />
      ))}
    </TagsWrapper>
  </StyledResponsibility>
);

export default Responsibility;
