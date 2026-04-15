import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./slice";
import studentsReducer  from "./mySlice";

 export const store = configureStore({
  reducer:{
    employeesD: employeeReducer,
    studentsD: studentsReducer,
  },//key value same key:value
 });