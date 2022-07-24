import styled, { css } from 'styled-components';
import { FlexRow } from '../../../../components/layout/alignment/Flex';
import NoPrint from '../../../../components/layout/utils/NoPrint';
import Tag from './Tag';

const TagsWrapper = styled(FlexRow)<{ width?: string }>`
  flex-wrap: wrap;
  gap: 0.5em 0.8em;
  align-content: center;
  justify-content: center;
  text-align: center;
  ${(p) => {
    if (p.width) {
      return css`
        width: ${p.width};
        min-width: ${p.width};
      `;
    }
    return css``;
  }}
`;

const TagList = (props: { tags: string[]; className?: string; width?: string }) => (
  <NoPrint>
    <TagsWrapper className={props.className} width={props.width}>
      {props.tags.map((tag) => (
        <Tag slug={tag} key={tag} />
      ))}
    </TagsWrapper>
  </NoPrint>
);

export default TagList;
