'use client'
import {store} from "./store";
const { Provider } = require("react-redux")// connect/binding to react redux

export const Providers =({children})=>{
  return <Provider store={store}>{children}</Provider>
}