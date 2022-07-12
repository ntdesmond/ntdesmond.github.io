import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FlexRow } from "../../../../components/layout/alignment/Flex";

const StyledTag = styled(Link)`
  font-size: 0.8em;
  font-weight: 500;
`;

const Tag = ({ name }: { name: string }) => (
  <StyledTag to={`#${name}`}>{name}</StyledTag>
);

const TagsWrapper = styled(FlexRow)`
  flex-wrap: wrap;
  gap: 0.5em 0.8em;
  align-content: center;
  justify-content: center;
`;

export const TagList = (props: { tags: string[]; className?: string }) => (
  <TagsWrapper className={props.className}>
    {props.tags.map((tag) => (
      <Tag name={tag} key={tag} />
    ))}
  </TagsWrapper>
);

export default Tag;
