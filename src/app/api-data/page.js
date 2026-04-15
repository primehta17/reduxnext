'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { apiData } from '../reduxToolkit/slice';

const APIData = () => {
   const dispatch = useDispatch();//create instance of useDispatch hook action sent/dispatch 
   const employeeApiapiData = useSelector((state)=>state.employeesD.employeesAPIData);
   const isLoading = useSelector((state)=>state.employeesD.isLoading);
   const error = useSelector((state)=>state.employeesD.error);


   //useeffect takes callback function , then [ dependencies]
   useEffect(()=>{
      dispatch(apiData());
   },[])
  return (
    <div>
      <h2>API Data</h2>
      {isLoading && <p>Loading.....</p>}
      {error && <p>Error {error}</p>}
      {employeeApiapiData.length >0 ? employeeApiapiData.map((item)=>(
        <li key ={item.id}>{item.name}</li>
      )) :!isLoading && <p>No Data</p>}
    </div>
  )
}

export default APIData;
