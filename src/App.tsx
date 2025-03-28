
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import Import from './pages/Import';
import Summary from './pages/Summary';
import { useEffect, useState } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div className="p-4 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <nav className="mb-4 flex gap-4 items-center">
          <NavLink to="/" className="hover:underline">Dashboard</NavLink>
          <NavLink to="/portfolio" className="hover:underline">Portfolio</NavLink>
          <NavLink to="/import" className="hover:underline">Import</NavLink>
          <NavLink to="/summary" className="hover:underline">Souhrn</NavLink>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-auto px-2 py-1 border rounded"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/import" element={<Import />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </div>
    </Router>
  );
}
