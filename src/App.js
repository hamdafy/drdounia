
import './App.css';
import {BrowserRouter, Routes,Route,useRoutes} from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddUpdate from './pages/AddUpdate';
import About from './pages/About';
import'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'
import View from './pages/View'
import ProtectedRoute from './pages/ProtectedRoute';
import Login from './pages/Login'
import { UserAuthContextProvider } from "./pages/context/UserAuthContext";
import'react-toastify/dist/ReactToastify.css'



import Search from './pages/Search';

function App() {
  return (

  
   
        <UserAuthContextProvider>
             <ToastContainer position='top-center'/>
             
          <Routes>
       
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                  
                </ProtectedRoute>
              }
            />

               <Route
              path="/add"
              element={
                <ProtectedRoute>
                  <AddUpdate />
                  
                </ProtectedRoute>
              }
            /> 


            
         <Route
              path="/view/:id"
              element={
                <ProtectedRoute>
                  <View/>
                  
                </ProtectedRoute>
              }
            />  
          

          <Route
              path="/update/:id"
              element={
                <ProtectedRoute>
                  <AddUpdate/>
                  
                </ProtectedRoute>
              }
            />  

            <Route
              path="/search"
              element={
                <ProtectedRoute>
                  <Search/>
                  
                </ProtectedRoute>
              }
            />  

            
          <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About/>
                  
                </ProtectedRoute>
              }
            />  




            <Route path="/" element={<Login />} />
          
          </Routes>
        </UserAuthContextProvider>
   

  );
}

export default App;
