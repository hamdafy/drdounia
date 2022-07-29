import React, { useState,useEffect } from 'react';
import {toast} from 'react-toastify';
import {useNavigate, useParams} from 'react-router-dom';
import './addupdate.css';
import firebaseDB from '../firebase'
import'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import {ToastContainer} from 'react-toastify'
const initialState={
    name :'',
    email:'',
   contact:'',
   fees :'',
    status :'',


}

const AddUpdate = () => {
    const [state,setstate]=useState(initialState);
    const [data,setData]=useState(initialState);
    const navigate = useNavigate ()
    const {id} = useParams()
    const {name,email,contact,fees,status} = state;

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
  


 
 useEffect(()=>{
  if (id){
   setstate({...data[id]})

  }else{
   setstate({...initialState})
  }
  },[id,data])

     const handleInputChange = (e) =>{
          const {name,value} =e.target;
          setstate({...state,[name]:value})
     }


     const handleSubmit = (e) =>{

        e.preventDefault();
        if (!id){
         if(!name || !email || !contact || !fees || !status){
            toast.error("makin mabo walakin")
         }else{
          console.log(state);
             firebaseDB.child('patients').push(state,(err) =>{
                
              if(err){
                 toast.error(err);
              }else{
                 toast.success("richti hinzugefugt ");
              }
             });
        }
      }
        else{
          firebaseDB.child(`patients/${id}`).set(state,(err)=>{
            if(err){
               toast.error(err)
            }else{
               toast.success("edit with success ")
            }

          })
        }
      
            setTimeout(()=> navigate('/home'),200)
        }
   
   

  return (
   <>
      <ToastContainer position='top-center'/>

   <Navbar></Navbar>
  
    <div style={{marginTop:"50px"}}>
     <form style={{
        margin:"auto",
        padding :"1rem",
        maxWidth : "450px",
        alignContent:"center"
     }} onSubmit={handleSubmit}>
   <label htmlFor='name'>Name</label>
   <input type="text" placeholder="entrer votre nom "


   
   id='name'
   value={name  || ""}
   name='name'
   onChange={handleInputChange}/>

<label className="text-center" htmlFor='name'> Email</label>
   <input type="email" placeholder="entrer votre email"
   
   id='email'
   value={email  || ""}
   name='email'
   onChange={handleInputChange}/>

<label htmlFor='name'> Contact</label>
   <input type="number" placeholder="entrer votre contact"
   
   id='contact'
   value={contact || "" }
   name='contact'
   onChange={handleInputChange}/>
  
  
  <label htmlFor='fees'> maladie</label>
   <input type="text" placeholder="entrer votre fees"
   
   id='fees'
   value={fees}
   name='fees'
   onChange={handleInputChange}/>
   
   <label htmlFor='fees'> status</label>
   <input type="text" placeholder="entrer votre status"
   
   id='status'
   value={status  || ""}
   name='status'
   onChange={handleInputChange}/>

  <input  type="submit" value={id  ? "update" : "save"} />

     </form>
    </div>
    </>
  )
}

export default AddUpdate