import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useLocation ,Link} from 'react-router-dom'
import firebaseDB from '../firebase';
import './search.css'
import Navbar from '../components/Navbar';

const Search = () => {
     const [data,setData] = useState({})
     const useQuery = () =>{
        return new URLSearchParams(useLocation().search)

     }
     let query = useQuery();
     let search = query.get('contact')
     console.log(search);

     const searchData = (search) =>{
       firebaseDB.child("patients").orderByChild('name').equalTo(search).on("value",(snapshot) =>{

         if (snapshot.val()){
            setData(snapshot.val());
         }
     
    
     })
}
    useEffect(()=>{
        searchData(search)
    },[search])


  return (
    <>
    <Navbar></Navbar>
    <div style={{textAlign:"center" , padding:"50px"}}>
      <h1 className='texttocenter'> patients de dounia sortiert nach name </h1>
      <Link to='/home'>
        <button   className='btn btn-edit '> zurück</button>
      </Link>
      {Object.keys(data).length === 0 ? (
        <h2>no search result</h2>
      ) 
      :
      (
        <table className='table-stayled'>

        <thead>
          <tr>
              <th style={{textAlign:"center"}}> no</th>
              <th style={{textAlign:"center"}}>name </th>
              <th style={{textAlign:"center"}}> emailt </th>
              <th style={{textAlign:"center"}}>contact</th>
              <th style={{textAlign:"center"}}> maldie</th>
               <th style={{textAlign:"center"}}>status</th>
              
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
              
            </td>
           </tr>
    
          );
        }
        
        )}
        </tbody>
      </table>

      )
    }
  
    </div>
    </>
  )
}

export default Search
