import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from '@chakra-ui/react';
import Layout from '../../components/layout/Layout';
import LanguageFragment from './components/LanguageFragment';
import EnCVFile from './files/cv_en.pdf';
import RuCVFile from './files/cv_ru.pdf';
import { Language } from './types/Language';

// const ActionsPanel = styled(FlexRow)`
//   gap: 2em;
//   align-items: center;

//   @media screen and (max-width: 640px) {
//     flex-direction: column;
//     gap: 1em;
//   }
// `;

// const StyledInnerDocument = styled.iframe`
//   width: 100%;
//   height: 100%;
//   border: none;
// `;

// const StyledLayout = styled(Layout)`
//   /* Dirty fix for 4px scroll */
//   overflow: hidden;
// `;

const files = {
  en: EnCVFile,
  ru: RuCVFile,
};

const CVPage = () => {
  const [language, setLanguage] = useState<Language>('en');
  return (
    <Layout>
      <VStack height="100%" align="stretch">
        <Flex direction={['column', 'row']} gap={['1em', '2em']}>
          <HStack>
            <Text>Language / Язык:</Text>
            <Menu>
              <MenuButton as={Button}>{language}</MenuButton>
              <MenuList>
                <MenuItem onClick={() => setLanguage('en')}>English</MenuItem>
                <MenuItem onClick={() => setLanguage('ru')}>Russian</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
          <HStack gap="1em" align="center">
            <Button onClick={() => window.frames[0].print()}>
              <LanguageFragment en="Print" ru="Печать" language={language} />
            </Button>
            <Link href={files[language]} isExternal>
              <LanguageFragment en="Open PDF version" ru="Открыть PDF-версию" language={language} />
            </Link>
          </HStack>
        </Flex>
        <Box as="iframe" flexGrow="1" title="CV" src={`cv.html?language=${language}`} />
      </VStack>
    </Layout>
  );
};

export default CVPage;
