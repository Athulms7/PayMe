export function Appbar() {
  return (
    <header className="bg-gray-300 p-5 shadow-lg flex justify-between relative top-2 rounded-2xl ">
      <div className="font-bold text-2xl flex ">
        <div className="text-dark-blue-800">Pay</div>
        <div className="text-blue-400">Tm</div>
      </div>
      <nav className="text-gray-800 text-lg">
        <a className="p-1  hover:text-gray-500" href="/dashboard">
          Home
        </a>
        <a className="p-1  hover:text-gray-500" href="/about">
          About
        </a>
        <a className="p-1  hover:text-gray-500" href="/profile">
          Profile
        </a>
        <a className="p-1  hover:text-gray-500" href="/signin" onClick={()=>{
         localStorage.clear();
        }}>
          Logout
        </a>
      </nav>
    </header>
  );
}
