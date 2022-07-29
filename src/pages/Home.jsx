import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';
import firebaseDB from '../firebase';
import './home.css';
import {ToastContainer} from 'react-toastify'
import { useUserAuth } from "./context/UserAuthContext";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const [data , setData]= useState({});
  useEffect(()=>{
       firebaseDB.child('patients').on("value",(snapshop) =>{
        if(snapshop.val() !=null){
          setData({...snapshop.val()})
        }else{
          setData({})
        }
       })
       return () =>{
        setData({})
       }
  },[])
  const onDelete = (id) =>{

    if (user.email==="hamzadafy@hotmail.com") {
    if(window.confirm("bghiti tsuprimmer had lpatient ")){
      firebaseDB.child(`patients/${id}`).remove((err)=>{
         if(err){
          toast.error(err)
         }else{
          toast.success("safi tsuprimer")
         }
      })
    }
  }else{
    window.confirm("bghiti tsuprimmer had lpatient ")
  }
  }

  return (
   <div>
 <ToastContainer position='top-center'/>
 <Navbar></Navbar>
 
 {user.email==="hamzadafy00@hotmail.com"  ? <p> Hello Welcome Admin du hast volle Rechte <br /> </p>  : <p> Hello Welcome Artzhelferin du kannst leider nich löschen und bearbeiten <br /> </p>}
          



    <div style={{marginTop:"50px"}}>
    
      <h1 className='greating'> patients de dounia </h1>
  <table className='table-stayled'>
    
    <thead>
      <tr>
          <th style={{textAlign:"center"}}> no</th>
          <th style={{textAlign:"center"}}>name </th>
          <th style={{textAlign:"center"}}> emailt </th>
          <th style={{textAlign:"center"}}>contact</th>
          <th style={{textAlign:"center"}}> maldie</th>
           <th style={{textAlign:"center"}}>status</th>
           <th style={{textAlign:"center"}}>action</th>
        </tr>
    </thead>
    <tbody>
    {Object.keys(data).map((id,index)=>{
      return (
       <tr key ={id}>
        <th>{index+1}</th>
        <td>{data[id].name}</td>
        <td>{data[id].email}</td>
        <td>{data[id].contact }</td>
        <td>{data[id].fees}</td>
        <td>{data[id].status}</td>
        <td>
        {user.email==="hamzadafy00@hotmail.com"   &&    <Link to= {`/update/${id}`}>
            <button className='btn btn-edit'>edit </button>
            
            </Link>
 }
          
       
            {user.email==="hamzadafy00@hotmail.com"   && <button className='btn btn-delete'  onClick={()=> onDelete(id)}>delete </button> }
          
           
          <Link to ={`/view/${id}`}>
         
          </Link>

          
          
          
          <Link to ={`/view/${id}`}>
            <button className='btn btn-view'>view </button>
          </Link>
        </td>
       </tr>

      );
    }
    
    )}
    </tbody>
  </table>
    </div>
    </div>
  )
}

export default Home
