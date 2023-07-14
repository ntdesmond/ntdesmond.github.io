import { Box, Wrap, WrapItem, useMediaQuery } from '@chakra-ui/react';
import Tag from './Tag';

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
