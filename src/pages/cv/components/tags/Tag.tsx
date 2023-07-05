import { useContext, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import TagsContext from '../../contexts/TagsContext';

const StyledTag = styled(Link)`
  color: #0066cc;
  font-weight: 500;
  text-decoration: underline dotted 1px;

  @media print {
    :visited {
      color: black;
    }
    font-weight: normal;
    text-decoration: none;
    color: black;
  }
`;

const StyledSelectedTag = styled(StyledTag)`
  @media not print {
    > span {
      background-color: #ff5;
      color: #001155;
      font-weight: bold;
    }
  }
`;

const Tag = (props: { slug: string; name?: string; register?: boolean; className?: string }) => {
  const { hash, search } = useLocation();
  const { pushTag } = useContext(TagsContext);

  const isPrintMode = useMemo(() => new URLSearchParams(search).get('print') !== null, [search]);

  const target = useMemo(() => `#${encodeURI(props.slug)}`, [props.slug]);

  useEffect(() => {
    if (props.register !== false) {
      pushTag(props.slug);
    }
  }, [props.register, props.slug, pushTag]);

  if (isPrintMode) {
    return (
      <StyledTag className={props.className} as="span">
        {props.name || props.slug}
      </StyledTag>
    );
  }

  return decodeURI(hash.slice(1)) === props.slug ? (
    <StyledSelectedTag className={props.className} to={target}>
      <span>{props.name || props.slug}</span>
    </StyledSelectedTag>
  ) : (
    <StyledTag className={props.className} to={search + target}>
      {props.name || props.slug}
    </StyledTag>
  );
};

export default Tag;
