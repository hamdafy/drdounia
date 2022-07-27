
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import firebaseDB from '../firebase'
import {Link} from 'react-router-dom'
import './view.css';
const View = () => {
    const[patient, setPatient]= useState({})
    const {id} = useParams()
    useEffect(() =>{
      firebaseDB.child(`patients/${id}`).get().then((snapshot)=>{
        if(snapshot.exists()) {
            setPatient({...snapshot.val()})
        }else{
            setPatient({})
        }

      })
    },[id])
    console.log(patient);
   return (
    <div style={{marginTop:"50px"}}>
        <div className='card'>

            <div className='card-header'>
                <p>patient detail</p>

            </div>

            <div className='conatiner'>
                <p> patiente detaails </p>
                <strong> ID:</strong>
                <span> {id} </span>
                <br/>
                <br/>
                <strong> name:</strong>
                <span> {patient.name} </span>
                <br/>
                <br/>
                <strong>email:</strong>
                <span> {patient.email} </span>
                <br/>
                <br/>
                <strong>contact:</strong>
                <span> {patient.contact} </span>
                <br/>
                <br/>

                <strong>maldie:</strong>
                <span> {patient.fees} </span>
                <br/>
                <br/>
                <strong>Statue:</strong>
                <span> {patient.status} </span>
                <br/>
                <br/>
                <Link to ='/'>
                    <button className='btn btn-edit'> zurück</button>
                </Link>
            </div>
        </div>
     
    </div>
  )
}

export default View
