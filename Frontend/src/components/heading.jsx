export function Heading({label,text}){
    return(<div className="flex-row justify-center font-bold text-gray-600 bg-white  text-2xl p-1">
        <div className="text-center">{label}</div>
        <p className="text-sm text-center w-75 p-2">{text}</p>
    </div>)
}