'use client'
import {store} from "./store";
import { Provider } from "react-redux";// connect/binding to react redux

export const Providers =({children})=>{
  return <Provider store={store}>{children}</Provider>
}