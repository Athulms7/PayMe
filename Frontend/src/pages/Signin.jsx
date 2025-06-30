import { Heading } from "../components/heading";
import { InputBox } from "../components/Inputbox";
import { Buttons } from "../components/button";
import { Bottomwarning } from "../components/Bottomwarning";
import { Signup } from "./Signup";
import { use, useState } from "react";
import axios  from "axios";
export function Signin() {
  localStorage.clear;
const [username,setusername]=useState("");
const [password,setpassword]=useState("");
async function signin(){
        const resp=await axios.post("http://localhost:3000/api/v1/user/signin",{
    username:username,
    password:password,

   

}) 
console.log(resp.data.token);
if(resp.data.token){
localStorage.setItem("token","Bearer "+resp.data.token);
window.location='/dashboard'
}

        }
  return (
    <div className="flex justify-center items-center bg-blue-100 pt-6 h-screen">
      <div className=" items-center bg-white w-90 p-5 m- h-100 rounded-3xl shadow-2xl/30 ">
        <Heading
          label="SignIn"
          text="Enter your Information to Create an account "
        ></Heading>
        <InputBox onchange={(e)=>{
            setusername(e.target.value);
        }} label={"Username"} placeholder={"Username"} type={"text"} ></InputBox>
        <InputBox onchange={(e)=>{
            setpassword(e.target.value);
        }} label={"Password"} placeholder={"Password"} type={"password"}></InputBox>
        <div className=" m-3">
        <Buttons onclick={signin} label={"SignIn"}></Buttons>
        <Bottomwarning
          label={"Don't Have an Account ?"}
          text={"SignUp"}
          onclick={"/signup"}
        ></Bottomwarning>
        </div>
      </div>
    </div>
  );
}

