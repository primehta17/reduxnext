const { configureStore } = require("@reduxjs/toolkit");
import reducer from './slice'

 export const store = configureStore({
  reducer:{
    employees: reducer,
  },//key value same key:value
 })