import { useState } from 'react';
import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../../components/layout/alignment/Flex';
import Layout from '../../components/layout/Layout';
import Dropdown from '../../components/ui/Dropdown';
import Language from './types/Language';
import LanguageFragment from './types/LanguageFragment';
import EnCVFile from './files/cv_en.pdf';
import RuCVFile from './files/cv_ru.pdf';

const ActionsPanel = styled(FlexRow)`
  gap: 2em;
  align-items: center;

  @media screen and (max-width: 640px) {
    flex-direction: column;
    gap: 1em;
  }
`;

const StyledInnerDocument = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const StyledLayout = styled(Layout)`
  /* Dirty fix for 4px scroll */
  overflow: hidden;
`;

const files = {
  en: EnCVFile,
  ru: RuCVFile,
};

const CV = () => {
  const [language, setLanguage] = useState<Language>('en');
  return (
    <StyledLayout>
      <FlexColumn height="100%" justify="flex-start" gap="1em">
        <ActionsPanel>
          <FlexRow gap="1em" align="center">
            <div>Language / Язык:</div>
            <Dropdown
              initialState="en"
              onChange={(lang) => setLanguage(lang.toString() as Language)}
            >
              <div key="en">English</div>
              <div key="ru">Russian</div>
            </Dropdown>
          </FlexRow>
          <FlexRow gap="1em" align="center">
            <button type="button" onClick={() => window.frames[0].print()}>
              {new LanguageFragment({ en: 'Print', ru: 'Печать' }).get(language)}
            </button>
            <a href={files[language]} target="_blank" rel="noreferrer">
              {new LanguageFragment({ en: 'Open PDF version', ru: 'Открыть PDF-версию' }).get(
                language,
              )}
            </a>
          </FlexRow>
        </ActionsPanel>
        <StyledInnerDocument title="CV" src={`/cv.html?language=${language}`} />
      </FlexColumn>
    </StyledLayout>
  );
};

export default CV;
