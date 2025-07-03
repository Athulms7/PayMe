import axios from "axios";
import { useEffect, useState } from "react"

export function Balance(){
const [balance,setbalance]=useState(0);
   async  function b(){
        const resp=await axios.get("http://localhost:3001/api/v1/account/balance")
    setbalance(resp.data.balance);

    }
    useEffect(()=>{
        b();
    },[]);
    
    return(<div>
        <div>

        </div>
    </div>)
}