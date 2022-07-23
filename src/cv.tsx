import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import CV from './pages/cv/components/CV';

const root = createRoot(document.getElementById('root')!);
root.render(
  <HashRouter>
    <Routes>
      <Route path="*" element={<CV />} />
    </Routes>
  </HashRouter>,
);
