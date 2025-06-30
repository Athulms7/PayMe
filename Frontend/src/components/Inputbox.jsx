export function InputBox({label,placeholder,onchange,type}){
    return(<div className="bg-white p-2  text-sm font-sans font-semibold shadow-2xl rounded-b-md ">
        {label}
        <div className="bg-white p-1  ">
            <input type={type} onChange={onchange} className="h-9 w-65 p-1  hover:bg-gray-200  border-gray-200 rounded-md border-2 "  placeholder={placeholder}></input>
        </div>

    </div>)
}