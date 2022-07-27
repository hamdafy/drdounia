
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddUpdate from './pages/AddUpdate';
import About from './pages/About';
import'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'
function App() {
  return (

    <BrowserRouter>
    
    <div className="App">
     <Navbar/>
     <ToastContainer position='top-center'/>
     <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<AddUpdate/>}/>
      <Route path='/update/:id' element={<AddUpdate/>}/>
      <Route path='/about' element={<About/>}/>
      
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
