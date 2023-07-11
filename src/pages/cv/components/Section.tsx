import { Box, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

// const StyledHeading = styled(SectionHeading)`
//   color: #035;
//   border-bottom: 0.15em solid #035;
//   margin: 0.5rem 0;
//   white-space: nowrap;
// `;

const Section = ({ title, children }: { title: ReactNode; children: ReactNode }) => (
  <Box marginY="0.5em">
    <Heading color="#035" borderColor="current" borderBottom="0.15em solid" marginBottom="0.3em">
      {title}
    </Heading>
    {children}
  </Box>
);

export default Section;
