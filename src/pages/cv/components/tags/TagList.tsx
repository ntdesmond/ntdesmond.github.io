import styled from "styled-components";
import { FlexRow } from "../../../../components/layout/alignment/Flex";
import Tag from "./Tag";

const TagsWrapper = styled(FlexRow)`
  flex-wrap: wrap;
  gap: 0.5em 0.8em;
  align-content: center;
  justify-content: center;
`;

const TagList = (props: { tags: string[]; className?: string }) => (
  <TagsWrapper className={props.className}>
    {props.tags.map((tag) => (
      <Tag name={tag} key={tag} />
    ))}
  </TagsWrapper>
);

export default TagList;
