import { Buttons } from "./button"
import axios from "axios";
import { useState } from "react";
export function Profilecomp({userdata}){
     const [firstname, setfirstname] = useState(userdata.firstname);
      const [lasttname, setlastname] = useState(userdata.lastname);
      const [username, setusername] = useState(userdata.username);
      const [password, setpassword] = useState(userdata.password);
    
    
async function Update() {
   const token = localStorage.getItem("token");
   console.log({
            firstname:firstname,
            lastname: lasttname,
            password: password,
            username:username,
          })
      const resp = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        
        {
            firstname:firstname,
            lastname: lasttname,
            password: password,
            username:username,
          },{
          headers:{
            authorization: token,
          },
        }
        
      );
    
   
  }

    return( <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-xl shadow-md w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        
        <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center text-center">
          <img
            src="/profile-picture.png"
            
            className="w-24 h-24 rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">{userdata.firstname}</h2>
          <p className="text-gray-500 text-sm mb-4">{userdata.username}</p>
          <h3 className="text-blue-600 font-semibold mb-2">About</h3>
          <p className="text-gray-700 text-sm">
            Profile Information
          </p>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-lg font-bold text-blue-600 mb-4">Personal Details</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">FirstName</label>
              <input onChange={(e)=>{
                setfirstname(e.target.value);
              }}
                type="text"
                placeholder={userdata.firstname}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Lastname</label>
              <input onChange={(e)=>{
                setlastname(e.target.value);
              }}
                type="text"
                placeholder={userdata.lastname}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            
            <div>
              <label className="block text-gray-700 font-medium mb-1">Username</label>
              <input
                type="text" onChange={(e)=>{
                setusername(e.target.value);
              }}
                placeholder={userdata.username}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="text" onChange={(e)=>{
                setpassword(e.target.value);
              }}
                placeholder={userdata.password}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">State</label>
              <input
                type="text"
                placeholder="Kerala"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            
            
          </form>
           <Buttons label={"Update"} onclick={Update}></Buttons>
        </div>
      </div>
    </div>)
}