import { useState } from 'react';
import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../../components/layout/alignment/Flex';
import Layout from '../../components/layout/Layout';
import Dropdown from '../../components/ui/Dropdown';

const StyledInnerDocument = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const StyledLayout = styled(Layout)`
  /* Dirty fix for 4px scroll */
  overflow: hidden;
`;

const CV = () => {
  const [language, setLanguage] = useState('en');
  return (
    <StyledLayout>
      <FlexColumn height="100%" justify="flex-start">
        <FlexRow gap="2em">
          <FlexRow gap="1em" align="center">
            <div>Language / Язык:</div>
            <Dropdown initialState="en" onChange={(lang) => setLanguage(lang.toString())}>
              <div key="en">English</div>
              <div key="ru">Russian</div>
            </Dropdown>
          </FlexRow>
          <button type="button" onClick={() => window.frames[0].print()}>
            Print
          </button>
          <button type="button">Download PDF</button>
        </FlexRow>
        <StyledInnerDocument title="CV" src={`/cv.html?language=${language}`} />
      </FlexColumn>
    </StyledLayout>
  );
};

export default CV;
