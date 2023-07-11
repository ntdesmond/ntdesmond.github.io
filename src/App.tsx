import { Navigate, Route, Routes } from 'react-router-dom';
import CVPage from './pages/cv/CVPage';
import Home from './pages/Home';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cv" element={<CVPage />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default App;
