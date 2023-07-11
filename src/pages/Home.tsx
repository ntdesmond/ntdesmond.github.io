import { Link as RouteLink } from 'react-router-dom';
import { Text, Heading, Link, Box } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';

const Home = () => (
  <Layout>
    <Box lineHeight="2em">
      <Text>
        Hello, <code>ntdesmond</code> here.
      </Text>
      <Heading size="lg" marginY="0.5em">
        Who?
      </Heading>
      <Text>
        <Text as="span" fontFamily="mono">
          ntdesmond
        </Text>
        , usually pronounced as <i>NT Desmond (an tee desmond)</i> is my nickname.
      </Text>
      <Text>
        My real name is <b>Vladislav Safonov</b>, and, as of 2023, I&#39;m a student of{' '}
        <Link href="https://innopolis.university/">Innopolis University</Link>.
      </Text>
      <Heading size="lg" marginY="0.5em">
        So?
      </Heading>
      <Text>
        Originally this site is meant to hold my{' '}
        <Link as={RouteLink} to="/cv">
          &#34;interactive&#34; CV
        </Link>
        , written in React, so that it works as an example of my work.
      </Text>
      <Text>Probably, I will add some more stuff here, we&#39;ll see.</Text>
    </Box>
  </Layout>
);

export default Home;
