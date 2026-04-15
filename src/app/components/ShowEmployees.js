'use client'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeEmployee } from '../reduxToolkit/slice';

function ShowEmployees() {
   const employeeData= useSelector((data)=>data.employeesD.employees || []);//callback function->initial state same as slice initial state

   //delete
   const dispatch =useDispatch();

  return (
    <div>
      <h2>Show Employees</h2>
      <ul>
        { 
         employeeData.map((val)=>(
            <li key ={val.id}>{val.name}
             <button onClick={()=>dispatch(removeEmployee(val.id))}>Delete</button>
            </li>
        ))
        }
      </ul>
    </div>
  )
}

export default ShowEmployees;
