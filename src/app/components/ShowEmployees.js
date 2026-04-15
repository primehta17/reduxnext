'use client'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeEmployee } from '../reduxToolkit/slice';

function ShowEmployees() {
   const employeeData= useSelector((data)=>data.employees.employees);//callback function->initial state same as slice initial state
   console.log(employeeData);


   //delete
   const dispatch =useDispatch();
  return (
    <div>
      <h2>Show Employees</h2>
      <ul>
        {
        employeeData.map((val)=>(
          <>
            <li key ={val.id}>{val.name}</li>
            <button onClick={()=>dispatch(removeEmployee(val.id))}>Delete</button>
          </>
        ))
        }
      </ul>
    </div>
  )
}

export default ShowEmployees;
