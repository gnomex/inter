import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/navbar.js';
import Projects from './components/projects.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
