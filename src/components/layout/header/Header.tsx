import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  gap: 1em;
`;

const Header: React.FC<{ isHome: boolean }> = ({ isHome }) => (
  <StyledHeader>
    {!isHome && <Link to="/">go home</Link>}
    <Link to="/cv">cv</Link>
    <div>nice header</div>
  </StyledHeader>
);

export default Header;
