import { ReactNode } from 'react';
import { Box, Center, HStack, Icon, Link, Spacer, VStack } from '@chakra-ui/react';
import { FiExternalLink } from 'react-icons/fi';
import NavLink from './NavLink';

const Layout = (props: { children: ReactNode }) => (
  <Center height="100%" width="100%" paddingX="3" boxSizing="border-box">
    <VStack height="100%" align="stretch" width="container.lg">
      <HStack paddingTop="1">
        <NavLink to="/">home</NavLink>
        <NavLink to="/cv">cv</NavLink>
        <Spacer />
        <Link href={`https://github.com/${import.meta.env.VITE_GITHUB_REPO}`} isExternal>
          source code
          <Icon as={FiExternalLink} marginX={2} />
        </Link>
      </HStack>
      <Box flexGrow="1" as="section">
        {props.children}
      </Box>
    </VStack>
  </Center>
);

export default Layout;
