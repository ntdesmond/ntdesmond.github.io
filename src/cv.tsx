import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CVComponent from './pages/cv/components/CV';
import '@fontsource/oswald';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import './common.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<CVComponent />} />
    </Routes>
  </BrowserRouter>,
);
