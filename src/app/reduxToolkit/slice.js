//actions + reducers
import { createSlice,nanoid,createAsyncThunk, current } from "@reduxjs/toolkit";


const initialState={
  //JSON.parse() on a JSON derived from an array, the method will return a JavaScript array, instead of a JavaScript object.
  employees:JSON.parse(localStorage.getItem('emp')) || [],
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
      state.employees.push(data);//redux state is immuatable(readonly form)
      //so we to make this muatable (current)
      
      let empData = JSON.stringify(current(state.employees));//JSON.stringify() can not only convert objects and arrays into JSON strings, it can convert any JavaScript value into a string.
      localStorage.setItem("emp",empData);

    },
    removeEmployee:(state,action)=>{
      // const data= state.employees.filter
      //filter return mutable array that is why don't use current
      state.employees=state.employees.filter((item)=>
           item.id !==action.payload //not clicked ones
           );
           localStorage.setItem("emp",JSON.stringify(state.employees));
      //  state.employees=data;
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