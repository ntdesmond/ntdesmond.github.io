import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { MdArrowDropDown } from 'react-icons/md';
import Layout from '../../components/layout/Layout';
import EnCVFile from './files/cv_en.pdf';
import RuCVFile from './files/cv_ru.pdf';
import { Language } from './types/Language';

const files: Record<Language, string> = {
  en: EnCVFile,
  ru: RuCVFile,
};

const languages: Record<Language, string> = {
  en: 'English',
  ru: 'Русский',
};

const CVPage = () => {
  const [language, setLanguage] = useState<Language>('en');

  const { t } = useTranslation(undefined, { lng: language });

  return (
    <Layout>
      <VStack height="100%" align="stretch">
        <Flex direction={['column', 'row']} gap={['1em', '2em']}>
          <HStack>
            <Text>Language / Язык:</Text>
            <Menu>
              <MenuButton
                as={Button}
                variant="outline"
                fontWeight="normal"
                rightIcon={<Icon as={MdArrowDropDown} boxSize="1.5em" marginRight="-0.5em" />}
              >
                {languages[language]}
              </MenuButton>
              <MenuList>
                {Object.entries(languages).map(([code, name]) => (
                  <MenuItem onClick={() => setLanguage(code as Language)}>{name}</MenuItem>
                ))}
              </MenuList>
            </Menu>
          </HStack>
          <HStack gap="1em" align="center">
            <Button onClick={() => window.frames[0].print()}>{t('print')}</Button>
            <Link href={files[language]} isExternal>
              {t('openPDF')}
            </Link>
          </HStack>
        </Flex>
        <Box as="iframe" flexGrow="1" title="CV" src={`cv.html?language=${language}`} />
      </VStack>
    </Layout>
  );
};

export default CVPage;
