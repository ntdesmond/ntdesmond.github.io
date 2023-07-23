import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import CVDocument from './pages/cv/CVDocument';
import baseTheme from './theme';
import './i18n';
import '@fontsource/oswald';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';

const printStyle = {
  '@media print': {
    '@page': {
      size: 'A4 portrait',
      margin: '0.7cm',
    },

    html: {
      /* idk why but it efficiently avoids a blank page */
      height: 0,
      fontSize: '0.34cm',
    },
  },
};

const theme = extendTheme({ styles: { global: printStyle } }, baseTheme);

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<CVDocument />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
);
