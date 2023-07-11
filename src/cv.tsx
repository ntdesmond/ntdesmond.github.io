import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import CVComponent from './pages/cv/components/CVDocument';
import '@fontsource/oswald';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import './common.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<CVComponent />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>,
);
