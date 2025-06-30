import { Link } from "react-router-dom"
export function Bottomwarning({label,text,onclick}){
    return(<div className="flex justify-center">
         
         <p className="   text-gray-600">
        {label} </p>
        <div className="text-blue-400 hover:underline">
            <Link to={onclick} >{text}</Link>
        </div>
        
      
    </div>)
}