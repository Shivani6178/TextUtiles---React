import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import About from './components/About';

function App() {
  const [mode, setmode] = useState(
    'black'
  )
  return (
    <>
    
      <BrowserRouter>
      <Navbar text="Sanjana" mode={mode} />
        <Routes>
        <Route path="/" element={<Textform/>} />
        <Route path="/about" element={<About/>} />
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
