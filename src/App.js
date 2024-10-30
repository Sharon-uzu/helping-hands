import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Screens/Home';
import AboutUs from './Screens/AboutUs';
import Contact from './Screens/Contact';
import Services from './Screens/Services';


function App() {
  return (
    <div className="App">
        <Routes>

          <Route path='/'element={<Home/>}/>
          <Route path='/services'element={<Services/>}/>
          <Route path='/about'element={<AboutUs/>}/>
          <Route path='/contact'element={<Contact/>}/>

        </Routes>
    </div>
  );
}

export default App;
