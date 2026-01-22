import './App.css';
import { Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { Route } from 'react-router-dom';
import Navbar from "./component/Navbar"
import { FormProvider } from './context/FormContext';

function App() {
  return (
    <>
    <Navbar />
    <FormProvider>
       <Routes>
      <Route path ="/" element ={<Home/>}/>
      <Route path ="/about" element ={<About/>}/>
      <Route path ="/notfound" element ={<NotFound/>}/>
    </Routes>
    </FormProvider> 
    </>
    
  );
}

export default App;
