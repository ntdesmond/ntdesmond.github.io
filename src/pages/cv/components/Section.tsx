import { Box, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

const Section = ({ title, children }: { title: ReactNode; children: ReactNode }) => (
  <Box marginY="0.5em">
    <Heading color="#035" borderColor="current" borderBottom="0.15em solid" marginBottom="0.3em">
      {title}
    </Heading>
    {children}
  </Box>
);

export default Section;
