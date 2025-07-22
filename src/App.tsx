import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Estimation from '@/pages/Estimation';

export default function App() {
  return (
    <Router basename="/pavepro-frontend">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estimation" element={<Estimation />} />
      </Routes>
    </Router>
  );
}
