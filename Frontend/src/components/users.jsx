import { Usericon } from "./Usericon.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

export function Users({filter}) {
  const [user, setusers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`).then((resp) => {
      console.log("hel;p", resp.data.user);
      setusers(resp.data.user);
    });
  }, [filter]);

  return (
    <>
      {user.map((u) => {
        return (
          <div key={u._id}>
            <Usericon username={u.username} userdata={u}></Usericon>
          </div>
        );
      })}
    </>
  );
}
