import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledTag = styled(Link)`
  font-weight: 500;
  text-decoration: underline dotted;
`;

const StyledSelectedTag = styled(StyledTag)`
  > span {
    background-color: #ff5;
    color: #001155;
    font-weight: bold;
  }
`;

const Tag = (props: { slug: string; name?: string }) => {
  const location = useLocation();
  const target = `#${encodeURI(props.slug)}`;

  return decodeURI(location.hash.slice(1)) === props.slug ? (
    <StyledSelectedTag to={target}>
      <span>{props.name || props.slug}</span>
    </StyledSelectedTag>
  ) : (
    <StyledTag to={target}>{props.name || props.slug}</StyledTag>
  );
};

export default Tag;
