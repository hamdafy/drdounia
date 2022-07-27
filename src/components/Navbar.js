import React, { useEffect, useState } from 'react'
import {Link,useLocation} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  const [activeTab , setactiveTab] = useState("Home")
  const location = useLocation();
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
        <Link to = '/'> 
        <p className='logo'>dounia  Dafy</p>
         </Link>
        <div className='header-right'>


        <Link to = '/'> 
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

         
        </div>

    </div>
  )
}

export default Navbar
