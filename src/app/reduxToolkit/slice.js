//actions + reducers
import { createSlice,nanoid,createAsyncThunk } from "@reduxjs/toolkit";


const initialState={
  employees:[],
  isLoading:false,
  error:null,
  employeesAPIData:[]
}
//api handling in reduxtoolkit (createAsyncThunk)to handle the Promises(async functions)
export const apiData= createAsyncThunk("apidata",async()=>{
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
})
export const create=createSlice({
  name:"reduxemp",
  initialState,
  reducers:{
    addEmployee:(state,action)=>{
      console.log(action);
      const data={
        id:nanoid(),
        name:action.payload // name is coming from input// for input action
      }
      state.employees.push(data)
    },
    removeEmployee:(state,action)=>{
      const data= state.employees.filter((item)=>{
          return item.id !==action.payload; //not clicked ones
       })
       state.employees=data;
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(apiData.pending,(state)=>{
      state.isLoading =true;
      state.error = null;
    })
    builder.addCase(apiData.fulfilled,(state,action)=>{
      state.isLoading =false;
      state.employeesAPIData = action.payload// in action data is coming
      state.error = null;
    })
    builder.addCase(apiData.rejected,(state,action)=>{
      state.isLoading =false;
      state.error = action.error.message;
    })
  }
});
//slices is combination of reducers and actions
export const {addEmployee,removeEmployee}=create.actions;
export default create.reducer;