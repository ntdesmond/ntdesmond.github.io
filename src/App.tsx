import { Navigate, Route, Routes } from 'react-router-dom';
import CV from './pages/cv/CV';
import Home from './pages/Home';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cv" element={<CV />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default App;
