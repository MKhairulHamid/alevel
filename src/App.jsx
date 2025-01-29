// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/Home';
import Assessment from './pages/Assessment';

function App() {
  return (
    <Router basename="/alevel">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/assessment/:subject/:level" element={<Assessment />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;