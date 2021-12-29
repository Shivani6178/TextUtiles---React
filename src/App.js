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
    'light'
  )

  const handleMode = () =>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#563D7C';
    }else{
      setmode('light');
      document.body.style.backgroundColor = '#FFFFFF';
    }
  }
  return (
    <>
      <BrowserRouter>
      <Navbar text="Sanjana" mode={mode} handleMode={handleMode}/>
        <Routes>
        <Route path="/" element={<Textform mode={mode}/>} />
        <Route path="/about" element={<About/>} />
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
