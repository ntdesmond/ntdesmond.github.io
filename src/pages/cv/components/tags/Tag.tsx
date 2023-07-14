import { useContext, useEffect, useMemo } from 'react';
import { Link as RouteLink, useLocation } from 'react-router-dom';
import { Link, Text, useMediaQuery } from '@chakra-ui/react';
import TagsContext from '../../contexts/TagsContext';

const Tag = (props: { slug: string; name?: string; register?: boolean }) => {
  const { hash } = useLocation();
  const { pushTag } = useContext(TagsContext);

  const [isPrintMode] = useMediaQuery('print');

  const target = useMemo(() => `#${encodeURI(props.slug)}`, [props.slug]);

  const isSelected = useMemo(() => decodeURI(hash.slice(1)) === props.slug, [hash, props.slug]);

  useEffect(() => {
    if (props.register !== false) {
      pushTag(props.slug);
    }
  }, [props.register, props.slug, pushTag]);

  if (isPrintMode) {
    return (
      <Text as="span" textDecoration="underline dotted 1px">
        {props.name || props.slug}
      </Text>
    );
  }

  return (
    <Link
      bgColor={isSelected ? 'yellow' : 'unset'}
      fontWeight={isSelected ? 'bold' : 'normal'}
      color={isSelected ? 'blue.800' : undefined}
      textDecoration="underline dotted 1px"
      as={RouteLink}
      to={target}
    >
      {props.name || props.slug}
    </Link>
  );
};

export default Tag;
