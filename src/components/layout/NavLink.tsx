import { Link, LinkProps, forwardRef } from '@chakra-ui/react';
import { NavLinkProps, NavLink as RouteNavLink } from 'react-router-dom';

/* eslint-disable react/jsx-props-no-spreading */
const NavLink = forwardRef<LinkProps & NavLinkProps, 'a'>((props, ref) => (
  <Link
    as={RouteNavLink}
    _activeLink={{ fontWeight: 'bold', color: 'black', textDecoration: 'unset' }}
    ref={ref}
    {...props}
  />
));

export default NavLink;
