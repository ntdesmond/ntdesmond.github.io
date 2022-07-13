import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledTag = styled(Link)`
  font-size: 0.8em;
  font-weight: 500;
`;

const Tag = ({ name }: { name: string }) => (
  <StyledTag to={`#${name}`}>{name}</StyledTag>
);

export default Tag;
