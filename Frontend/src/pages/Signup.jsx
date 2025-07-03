import { useEffect, useState } from "react";
import { Bottomwarning } from "../components/Bottomwarning";
import { Buttons } from "../components/button";
import { Heading } from "../components/heading";
import { InputBox } from "../components/Inputbox";

import axios from "axios";
import WelcomeMessage from "./sidepage";

export function Signup() {
  const [firstname, setfirstname] = useState("");
  const [lasttname, setlastname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

 async function signup() {

    const resp=await axios.post("http://localhost:3001/api/v1/user/signup", {
      username: username,
      password: password,
      lastname: lasttname,
      firstname: firstname,
    });
    console.log(resp);
    if(resp.data.token){
        window.location = "/signin";
    }else{
      alert("Error While Signup");
    }
    
  }

  return (
    <div className="flex">
    <div className="flex justify-center bg-blue-100 pt-6 w-180 h-screen">
      <div className=" center bg-white w-90 p-5 m- h-130 rounded-3xl shadow-2xl/30 ">
        <Heading
          label="SignUp"
          text="Enter your Information to Create an account "
        ></Heading>
        <InputBox
          onchange={(e) => {
            setfirstname(e.target.value);
          }}
          label={"Firstname"}
          placeholder={"Firstname"}
          type={"text"}
        ></InputBox>
        <InputBox
          onchange={(e) => {
            setlastname(e.target.value);
          }}
          label={"Lastname"}
          placeholder={"Lastname"}
          type={"text"}
        ></InputBox>
        <InputBox
          onchange={(e) => {
            setusername(e.target.value);
          }}
          label={"Username"}
          placeholder={"xyz@example.com"}
          type={"text"}
        ></InputBox>
        <InputBox
          onchange={(e) => {
            setpassword(e.target.value);
          }}
          label={"Password"}
          placeholder={"Password"}
          type={"password"}
        ></InputBox>
        <Buttons onclick={signup} label={"SignUp"}></Buttons>
        <Bottomwarning
          label={"Already Have an Account ?"}
          text={"SignIn"}
          onclick={"/signin"}
        ></Bottomwarning>
      </div>
      
    </div>
    <div>
<WelcomeMessage/>
    </div>
    </div>
  );
}


