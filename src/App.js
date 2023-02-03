
import {Route,Routes} from 'react-router-dom'
import { About } from './pages/About';
import { Blogs } from './pages/Blogs';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';


import { Product } from './pages/Product';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/shop' element={<Product/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/blog' element={<Blogs/>} />
     
    </Routes>


    
    </>
  );
}

export default App;
