import { useEffect, useState } from "react";
import { Profilecomp } from "../components/profilecomp";
import axios from "axios";


export function Profile() {
const token = localStorage.getItem("token");
  const [userdata, setuserdata] = useState({});
  async function users() {
    const resp = await axios.get("http://localhost:3001/api/v1/user/profile", {
      headers: {
        authorization: token,
      },
    });
    setuserdata(resp.data.user);
    console.log(resp.data.user);
  }

  useEffect(() => {
    users();
  }, []);

  
  return (
    <>
      <Profilecomp userdata={userdata} />
     
    </>
  );
}
