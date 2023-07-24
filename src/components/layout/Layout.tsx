import React from 'react';
import { Box, Center, HStack, Link, Text, VStack } from '@chakra-ui/react';
import NavLink from './NavLink';

const Layout = (props: { children: React.ReactNode }) => (
  <Center height="100%" width="100%" padding="0.5em" boxSizing="border-box">
    <VStack height="100%" align="stretch" width="container.lg">
      <HStack>
        <NavLink to="/">home</NavLink>
        <NavLink to="/cv">cv</NavLink>
      </HStack>
      <Box flexGrow="1" as="section">
        {props.children}
      </Box>
      <Text textAlign="center">
        Source code of this website is available at{' '}
        <Link href={`https://github.com/${import.meta.env.VITE_GITHUB_REPO}`} isExternal>
          GitHub
        </Link>
      </Text>
    </VStack>
  </Center>
);

export default Layout;
