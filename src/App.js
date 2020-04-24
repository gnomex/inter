import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ProjectProvider } from './components/projectContext';
import Navbar from './components/navbar.js';
import ProjectList from './components/projectList.js';
import Footer from './components/footer.js';

const App = () => {
  return (
    <div>
      <ProjectProvider>
        <Navbar />
        <ProjectList />
      </ProjectProvider>
      <Footer />
    </div>
  );
}

export default App;
