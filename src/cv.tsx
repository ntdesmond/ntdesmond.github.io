import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import CVComponent from './pages/cv/components/CV';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<CVComponent />} />
    </Routes>
  </BrowserRouter>,
);
