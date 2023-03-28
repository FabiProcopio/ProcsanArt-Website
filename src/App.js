import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Gallery from './pages/gallery';
import Commission from './pages/commission';
import Webcomic from './pages/webcomic';
import Prints from './pages/prints';



function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/commission' element={<Commission />}/>
        <Route path='/webcomic' element={<Webcomic />}/>
        <Route path='/prints' element={<Prints />}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
