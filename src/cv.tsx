import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import CV from './pages/cv/components/CV';

const root = createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<CV />} />
    </Routes>
  </BrowserRouter>,
);
