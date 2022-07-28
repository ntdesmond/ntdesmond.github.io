import { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import TagsContext from '../../contexts/TagsContext';

const StyledTag = styled(Link)`
  font-weight: 500;
  text-decoration: underline dotted;
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

const Tag = (props: { slug: string; name?: string; register?: boolean }) => {
  const { hash, search } = useLocation();
  const { pushTag } = useContext(TagsContext);

  const target = `#${encodeURI(props.slug)}`;

  useEffect(() => {
    if (props.register !== false) {
      pushTag(props.slug);
    }
  }, []);

  return decodeURI(hash.slice(1)) === props.slug ? (
    <StyledSelectedTag to={target}>
      <span>{props.name || props.slug}</span>
    </StyledSelectedTag>
  ) : (
    <StyledTag to={search + target}>{props.name || props.slug}</StyledTag>
  );
};

export default Tag;
