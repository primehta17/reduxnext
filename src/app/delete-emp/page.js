'use client';
import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {removeEmployee} from '../reduxToolkit/slice'

const DeleteEmployee =()=>{
  const data = useSelector((value)=>value.employeesD.employees) //in this selector data will get from redux toolkit

  const dispatch =useDispatch();
   return (
    <>
    <h2>Delete Employee  .</h2><hr/>
    <ul>
    {
      data.map((item)=>(
        <>
         <li key={item.id}>{item.name}
         <button onClick={()=>dispatch(removeEmployee(item.id))}>Delete</button>
         </li>
        </>
      ))
    }
    </ul>
    </>
   )
}
export default  DeleteEmployee;