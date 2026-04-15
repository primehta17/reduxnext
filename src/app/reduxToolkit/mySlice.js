import {createSlice} from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState ={
  students:[]
}
const Slice= createSlice({
  name:"myStudents",
  initialState,
  reducers:{
    addStudents:(state,action)=>{
      const data= {
        id:nanoid(),
        name:action.payload
      }
      state.students.push(data);
    },
    removeStudents:(state,action)=>{
      const data=state.students.filter((item)=>{
        return item.id !== action.payload
      })
      state.students=data;
    }
   
  }
})
export const {addStudents,removeStudents} = Slice.actions;
export default Slice.reducer;