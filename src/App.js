import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Home from './components/home/Home';

function App() {
  return (
    <div className="App-container">
      <Home />
    </div>
  );
}

export default App;