import { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import TagsContext from '../../contexts/TagsContext';

const StyledTag = styled(Link)`
  color: #0066cc;
  font-weight: 500;
  text-decoration: underline dotted;
  
  @media print {
    :visited {
      color: #001155;
    }
    color: #001155;
    font-weight: bold;
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

const Tag = (props: { slug: string; name?: string; register?: boolean; className?: string; }) => {
  const { hash, search } = useLocation();
  const { pushTag } = useContext(TagsContext);

  const isPrintMode = new URLSearchParams(search).get('print') !== null;

  const target = `#${encodeURI(props.slug)}`;

  useEffect(() => {
    if (props.register !== false) {
      pushTag(props.slug);
    }
  }, []);

  if (isPrintMode) {
    return <StyledTag className={props.className} as="span">{props.name || props.slug}</StyledTag>;
  }

  return decodeURI(hash.slice(1)) === props.slug ? (
    <StyledSelectedTag className={props.className} to={target}>
      <span>{props.name || props.slug}</span>
    </StyledSelectedTag>
  ) : (
    <StyledTag
      className={props.className}
      to={search + target}
    >
      {props.name || props.slug}
    </StyledTag>
  );
};

export default Tag;
