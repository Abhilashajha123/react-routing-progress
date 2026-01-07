import './App.css';
import { Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { Route } from 'react-router-dom';
import Navbar from "./component/Navbar"

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path ="/" element ={<Home/>}/>
      <Route path ="/about" element ={<About/>}/>
      <Route path ="/notfound" element ={<NotFound/>}/>
    </Routes>
    
    </>
    
  );
}

export default App;
