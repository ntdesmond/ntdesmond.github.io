import { Box, Wrap, WrapItem, useMediaQuery } from '@chakra-ui/react';
import Tag from './Tag';

// const TagsWrapper = styled(FlexRow)<{ width?: string; print?: boolean }>`
//   flex-wrap: wrap;
//   font-size: 0.8em;
//   gap: 0.5em 0.8em;
//   align-content: center;
//   justify-content: center;
//   text-align: center;
//   ${(p) => {
//     let style = '';
//     if (p.width) {
//       style += css`
//         width: ${p.width};
//         min-width: ${p.width};
//       `;
//     }
//     if (!p.print) {
//       style += css`
//         @media print {
//           display: none;
//         }
//       `;
//     }
//     return style;
//   }}
// `;

const TagList = ({ tags, print }: { tags: string[]; print?: boolean }) => {
  const [isPrintMode] = useMediaQuery('print');
  if (!print && isPrintMode) {
    return <Box />;
  }
  return (
    <Wrap justify="center">
      {tags.map((tag) => (
        <WrapItem key={tag}>
          <Tag slug={tag} />
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default TagList;
