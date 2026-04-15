//action and reducers
const { createSlice,nanoid } = require("@reduxjs/toolkit");


const initialState={
  employees:[]
}
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
  }
});
//slices is combination of reducers and actions
export const {addEmployee,removeEmployee} = create.actions;
export default create.reducer;