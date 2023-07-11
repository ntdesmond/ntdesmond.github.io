import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import '@fontsource/open-sans/400-italic.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/fira-code/400.css';
import './common.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ChakraProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </ChakraProvider>,
);
