import { Text, Heading, Link, Box, ListItem, UnorderedList } from '@chakra-ui/react';
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
      <Heading size="md" marginY="0.5em">
        About me
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
        <Link href="https://innopolis.university/" isExternal>
          Innopolis University
        </Link>
        .
      </Text>
      <Text>
        By the way, I made my thesis publicly available at{' '}
        <Link href="https://dx.doi.org/10.13140/RG.2.2.24800.25609" isExternal>
          ResearchGate
        </Link>
        .
      </Text>
      <Heading size="md" marginY="0.5em">
        Links
      </Heading>
      <UnorderedList>
        <ListItem>
          <Link href="https://t.me/ntdesmond" isExternal>
            telegram
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://t.me/the_moon_bear" isExternal>
            telegram channel (ru)
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/ntdesmond" isExternal>
            github profile
          </Link>
        </ListItem>
      </UnorderedList>
    </Box>
  </Layout>
);

export default Home;
