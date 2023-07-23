import { useContext, useEffect, useMemo } from 'react';
import { Link as RouteLink, useLocation } from 'react-router-dom';
import { Link, Text } from '@chakra-ui/react';
import TagsContext from '../../contexts/TagsContext';
import { NoPrint, OnlyPrint } from '../../../../components/utils/Print';

const Tag = ({
  slug: originalSlug,
  name,
  register,
}: {
  slug?: string;
  name?: string;
  register?: boolean;
}) => {
  const { hash } = useLocation();
  const { pushTag } = useContext(TagsContext);

  const slug = useMemo(() => originalSlug || name, [name, originalSlug]);

  const isSelected = useMemo(() => decodeURI(hash.slice(1)) === slug, [hash, slug]);

  const target = useMemo(
    () => (isSelected ? `#` : `#${encodeURI(slug || '')}`),
    [isSelected, slug],
  );

  useEffect(() => {
    if (slug && register !== false) {
      pushTag(slug);
    }
  }, [pushTag, register, slug]);

  return (
    <>
      <OnlyPrint>
        <Text as="span" textDecoration="underline dotted 1px">
          {name}
        </Text>
      </OnlyPrint>
      <NoPrint>
        <Link
          bgColor={isSelected ? 'yellow' : 'unset'}
          fontWeight={isSelected ? 'bold' : 'normal'}
          color={isSelected ? 'blue.800' : undefined}
          textDecoration="underline dotted 1px"
          as={RouteLink}
          to={target}
        >
          {name}
        </Link>
      </NoPrint>
    </>
  );
};

export default Tag;
