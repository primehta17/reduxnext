'use client'
import {useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {addEmployee} from '../reduxToolkit/slice';
function AddEmployees() {
  const [empName,setEmpName]=useState("");
  const dispatch=useDispatch();

  const dataDispatch=()=>{
    console.log(empName);

// {type: 'reduxemp/addEmployee', payload: 'sdfs'}
// payload: "sdfs"(data comes in payload)
// type: "reduxemp/addEmployee"(constants)
  if(empName.trim() =="") return false;
    dispatch(addEmployee(empName));
    setEmpName("");
  }
  return (
    <div className="formSection">
      <label for="emp">Add Employees</label>
      <input type="text" placeholder="Add data" value={empName} onChange={(e)=>setEmpName(e.target.value)}/>
      <br/>
      <button onClick={dataDispatch}>Button</button>
    </div>
  )
}

export default AddEmployees;
