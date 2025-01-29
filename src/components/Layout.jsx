// src/components/Layout.jsx
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Header = () => {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Cambridge A-Level</Link>
          <div className="space-x-6">
            <Link to="/" className="hover:text-blue-200">Home</Link>
            <Link to="/assessment" className="hover:text-blue-200">Assessment</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: support@cambridgealevel.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Subjects</h3>
            <ul>
              <li>Mathematics</li>
              <li>Physics</li>
              <li>Computer Science</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul>
              <li>Pre-Assessment</li>
              <li>Study Materials</li>
              <li>Past Papers</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2025 Cambridge A-Level Tutoring. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;