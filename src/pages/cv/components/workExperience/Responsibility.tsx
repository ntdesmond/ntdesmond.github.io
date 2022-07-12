import styled from "styled-components";
import Tag, { TagList } from "../tags/Tag";

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
    <TagList tags={props.tags} />
  </StyledResponsibility>
);

export default Responsibility;
