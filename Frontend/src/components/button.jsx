
export function Buttons({label,onclick}) {
  return (
    <div className="flex-row justify-center text-white  text-center m-2"> 
      <button onClick={onclick} className="bg-black rounded w-60 p-1 hover:bg-gray-800 ">{label}</button>
     
      
    </div>
  );
}