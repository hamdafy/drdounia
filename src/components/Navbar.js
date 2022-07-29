import React, { useEffect, useState } from 'react'
import {Link,Navigate,useLocation, useNavigate} from 'react-router-dom'
import './Navbar.css'
import {ToastContainer} from 'react-toastify'
import { useUserAuth } from '../pages/context/UserAuthContext'

const Navbar = () => {
  const { logOut, user } = useUserAuth();
  const handleLogout = async () => {
    if(window.confirm("willst  du dich wirklich ausloggen  ")){

    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
     
  }

  }
  
  const [activeTab , setactiveTab] = useState("Home")
  const [search , setSearch] = useState("")
  const location = useLocation();
  const navigate = useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate(`/search?contact=${search}`)
    setSearch("")
  }
  useEffect(()=>{
    if(location.pathname === '/'){
        setactiveTab("Home")
    }
    else if(location.pathname === '/add'){
        setactiveTab("AddStudent")
    }
    else if(location.pathname === '/about'){
        setactiveTab("About")
    }
  },[location])
  return (
    <div className='header'>
      <ToastContainer position='top-center'/>
        <Link to = '/home'> 
        <p className='logo'>dounia  Dafy</p>
         </Link>
      
       
        
        <div className='header-right'>
          <form onSubmit={handleSubmit} style={{display:"inline"}}>
            <input type ="text" 
            className='inputfield' 
            placeholder='Search P.name'
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            />
          </form>


        <Link to = '/home'> 
        <p className={`${activeTab==="Home" ? 'active':""}`}
        onClick ={()=>setactiveTab('Home')}>Home</p>
         </Link>
        

         <Link to = '/add'> 
        <p className={`${activeTab==="AddStudent" ? 'active':""}`}
        onClick ={()=>setactiveTab('AddStudent')}>Add patient</p>
         </Link>
         

         <Link to = '/about'> 
        <p className={`${activeTab==="About" ? 'active':""}`}
        onClick ={()=>setactiveTab('About')}>About</p>
         </Link>
         <p onClick={handleLogout} >log out </p>
         
        </div>
     view
    </div>
  )
}

export default Navbar
