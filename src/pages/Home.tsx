import { Link as RouteLink } from 'react-router-dom';
import { Text, Heading, Link, Box } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';

const Home = () => (
  <Layout>
    <Box lineHeight="2em">
      <Text>
        Hello,{' '}
        <Text as="span" fontFamily="mono">
          ntdesmond
        </Text>{' '}
        here.
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
        My real name is <b>Vladislav Safonov</b>, I am a software developer. In 2023, I finished my
        bachelor&#39;s degree at{' '}
        <Link href="https://innopolis.university/">Innopolis University</Link>.
      </Text>
      <Heading size="lg" marginY="0.5em">
        So?
      </Heading>
      <Text>
        Originally this site is meant to hold my{' '}
        <Link as={RouteLink} to="/cv">
          CV
        </Link>{' '}
        written in React.
      </Text>
      <Text>Probably, I will add more stuff here later, we&#39;ll see.</Text>
    </Box>
  </Layout>
);

export default Home;
