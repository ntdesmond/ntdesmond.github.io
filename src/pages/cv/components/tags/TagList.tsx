import styled, { css } from 'styled-components';
import { FlexRow } from '../../../../components/layout/alignment/Flex';
import Tag from './Tag';

const TagsWrapper = styled(FlexRow)<{ width?: string; print?: boolean }>`
  flex-wrap: wrap;
  gap: 0.5em 0.8em;
  align-content: center;
  justify-content: center;
  text-align: center;
  ${(p) => {
    let style = '';
    if (p.width) {
      style += css`
        width: ${p.width};
        min-width: ${p.width};
      `;
    }
    if (!p.print) {
      style += css`
        @media print {
          display: none;
        }
      `;
    }
    return style;
  }}
`;

const TagList = (props: {
  tags: string[];
  className?: string;
  width?: string;
  print?: boolean;
}) => (
  <TagsWrapper className={props.className} width={props.width} print={props.print}>
    {props.tags.map((tag) => (
      <Tag slug={tag} key={tag} />
    ))}
  </TagsWrapper>
);

export default TagList;
