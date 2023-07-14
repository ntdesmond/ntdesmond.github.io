import { Box, Heading, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

const EducationEntry = (props: {
  specialty: ReactNode;
  organization: ReactNode;
  period: ReactNode;
}) => (
  <Box>
    <Heading size="md">{props.organization}</Heading>
    <Text>{props.specialty}</Text>
    <Text>{props.period}</Text>
  </Box>
);

export default EducationEntry;
