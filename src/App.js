import React from 'react';
import './App.css';

import AnormalySidebar from '../src/features/components/AnormalySidebar.js'

function App() {
  return (
    <div className="d-flex">
      <div className='col-lg-4'>
        <AnormalySidebar />
      </div>
      
    </div>
  );
}

export default App;
