import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import StickyNote from './components/StickyNotes';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <StickyNote />
    </div>
  );
}

export default App;
