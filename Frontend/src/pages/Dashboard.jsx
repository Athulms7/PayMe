import axios from "axios";
import { Appbar } from "../components/Appbar";
import { Bottombar } from "../components/Bottombar";
import { Usericon } from "../components/Usericon";
import { useEffect, useState } from "react";
import { Users } from "../components/users";
import {NotPage} from "./pagenotfound.jsx";

export function Dashboard() {
 const [filter,setFilter]=useState("");

 if(!localStorage.getItem("token")){
  return(<div>
    <NotPage></NotPage>
  </div>)
 }
  return (
    <div className="bg-gray-200 ">
      <Appbar></Appbar>
      <input className="p-2 m-4 w-230 rounded-2xl bg-gray-300" placeholder="Search" onChange={(e)=>{
          setFilter(e.target.value);
        }}></input>
      <div className="h-60 grid grid-cols-6 gap-1 mt-4">
        
       <Users filter={filter}></Users>
  
      </div>
      <div className="h-42">

      </div>
      <Bottombar></Bottombar>
    </div>
  );
}
