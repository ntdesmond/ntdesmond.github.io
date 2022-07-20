import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  gap: 1em;
`;

const ActiveLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: #000;
`;

const links = {
  '/': 'home',
  '/cv': 'cv',
};

const Header = () => {
  const location = useLocation();

  const linkElements = Object.entries(links).map(([path, name]) =>
    location.pathname === path ? (
      <ActiveLink key={path} to={path}>
        {name}
      </ActiveLink>
    ) : (
      <Link key={path} to={path}>
        {name}
      </Link>
    ),
  );
  return <StyledHeader>{linkElements}</StyledHeader>;
};

export default Header;
