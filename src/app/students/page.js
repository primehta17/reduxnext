'use client';
import {useState} from 'react';
import {addStudents,removeStudents} from '../reduxToolkit/mySlice';
import { useDispatch,useSelector } from 'react-redux';


const Students=() =>{
  const [std,setStd]=useState('')
   const studata=useSelector((data)=>data.studentsD?.students || []);
  
  const dispatch=useDispatch();
  return (
    <div>
      <h2>Register Students</h2>
      <input type="text" placeholder="Enter Student Name" onChange={(e)=> setStd(e.target.value)} />
      <br/>
      <button onClick={()=>dispatch(addStudents(std))}>Register</button>

      <h2>Show registerd Students</h2>
      <ul>
        {studata.length && studata.map((val)=>(
          <li key={val.id}>{val.name}
          <button onClick={()=>dispatch(removeStudents(val.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Students
