import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledTag = styled(Link)`
  font-weight: 500;
  text-decoration: underline dotted;
`;

const StyledSelectedTag = styled(StyledTag)`
  > span {
    background-color: #ff5;
  }
  font-weight: bold;
`;

const Tag = ({ name }: { name: string }) => {
  const location = useLocation();
  const target = `#${encodeURI(name)}`;

  return decodeURI(location.hash.slice(1)) === name ? (
    <StyledSelectedTag to={target}>
      <span>{name}</span>
    </StyledSelectedTag>
  ) : (
    <StyledTag to={target}>{name}</StyledTag>
  );
};

export default Tag;
