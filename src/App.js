import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import './assets/Fonts/MONUMENT-Webfont/specimen_files/specimen_stylesheet.css'
import './assets/Fonts/MONUMENT-Webfont/stylesheet.css'

import Header from './common/Header';
import Home from '../src/pages/home/Home'
import Footer from './common/Footer';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Gallery from './pages/home/components/Gallery';
function App() {
  return (
    <>
      <BrowserRouter basename='/bouquet_collection/'>
    
        <Routes>
          <Route path="/" element={ <Home />}></Route>
          <Route path="/gallery" element={<Gallery/>}></Route>
        </Routes>
      
      </BrowserRouter>
   
    </>
  );
}

export default App;
