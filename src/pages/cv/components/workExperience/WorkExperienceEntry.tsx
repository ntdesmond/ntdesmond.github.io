import { ReactNode } from 'react';
import { Box, HStack, Heading, Text } from '@chakra-ui/react';
import LanguageFragment from '../LanguageFragment';
import TagList from '../tags/TagList';

// const StyledEntry = styled.div`
//   margin-bottom: 1em;

//   @media print {
//     margin-bottom: 0.4em;
//   }r
// `;

// const StyledPosition = styled.p`
//   font-weight: 500;
// `;

const WorkExperienceEntry = (props: {
  company: ReactNode;
  position: ReactNode;
  period: ReactNode;
  tags?: string[];
  children?: ReactNode;
}) => (
  <Box marginBottom="1em">
    <HStack justify="space-between" align="center">
      <Box>
        <Heading size="lg">{props.company}</Heading>
        <Text>{props.position}</Text>
        <Text>{props.period}</Text>
      </Box>
      {props.tags && <TagList tags={props.tags} />}
    </HStack>
    <Box>
      <Heading size="md">
        <LanguageFragment en="Responsibilities:" ru="Обязанности:" />
      </Heading>
      {props.children}
    </Box>
  </Box>
);

export default WorkExperienceEntry;
