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
      <h2>Register Students<br/>
        (Add & Delete in same components)</h2>
      <input type="text" placeholder="Enter Student Name" onChange={(e)=> setStd(e.target.value)} />
      <br/>
      <button onClick={()=>dispatch(addStudents(std))}>Register</button>
<br/><br/>
      <h2>Show registerd Students</h2>
      <ul>
        {studata.length && studata.map((val)=>(
          <li key={val.id}>{val.name}
          <button className="delete-btn" onClick={()=>dispatch(removeStudents(val.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Students
