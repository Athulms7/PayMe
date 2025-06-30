import { useNavigate } from "react-router-dom";

export function Usericon({username,userdata}) {
     
     const usernamee=username.slice(0,1).toUpperCase();
     console.log(usernamee);
     
     const navigate=useNavigate();
return (
   
    <div className="flex-row justify-center w-40">
      
        <div className="flex justify-center">
      <button onClick={(e)=>{
        navigate("/send?id="+userdata._id+"&name="+userdata.firstname);

      }}className="bg-blue-300 w-18 h-15 rounded-full p-2 text-amber-100">
        {usernamee}
      </button>
      </div>
      <div className="text-center text-sm font-medium">
      {userdata.firstname}
      </div>
      
    </div>
  );
}
