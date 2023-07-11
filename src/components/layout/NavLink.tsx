import { Link, LinkProps, forwardRef } from '@chakra-ui/react';
import { NavLinkProps, NavLink as RouteNavLink } from 'react-router-dom';

const NavLink = forwardRef<LinkProps & NavLinkProps, 'a'>((props, ref) => (
  <Link
    as={RouteNavLink}
    _activeLink={{ fontWeight: 'bold', color: 'black', textDecoration: 'unset' }}
    ref={ref}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
));

export default NavLink;
