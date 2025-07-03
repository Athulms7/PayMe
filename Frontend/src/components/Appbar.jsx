import {Link} from 'react-router-dom';
export function Appbar() {
  return (
    <header className="bg-gray-300 p-4 shadow-lg flex justify-between relative top-2 rounded-2xl ">
      <div className="font-bold text-2xl flex ">
        <div className="text-dark-blue-800">Pay</div>
        <div className="text-blue-400">Me</div>
      </div>
      <nav className="text-gray-800 text-lg">
        <Link className="p-1  hover:text-gray-500" to="/dashboard">
          Home
        </Link>
        <Link className="p-1  hover:text-gray-500" to="/about">
          About
        </Link>
        <Link className="p-1  hover:text-gray-500" to="/profile">
          Profile
        </Link>
        <Link className="p-1  hover:text-gray-500" to="/signin" onClick={()=>{
         localStorage.clear();
        }}>
          Logout
        </Link>
      </nav>
    </header>
  );
}