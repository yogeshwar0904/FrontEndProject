import './App.css';
import HomePage from './pages/HomePage';

import {BrowserRouter as Router,
        Routes,
        Route,
        Link 
      } from 'react-router-dom'
function App() {
  return (
    <div>
    <HomePage/>
    </div>
  );
}

export default App;
