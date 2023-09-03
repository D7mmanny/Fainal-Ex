import{useState}from"react"
import axios from "axios"
import { useNavigate } from "react-router-dom";




function Lpgin() {
    const nave=useNavigate()
    const[user,setuser]=useState({
        username:"",
        password:''
    })
const hande =(e)=>{
    setuser({...user,[e.target.name]:e.target.value})
}
console.log(user.username);


const sub=()=>{
  
    fetch('https://fakestoreapi.com/users',{
        method:'POST',
        body:JSON.stringify({
            username: user.username,
            password: user.password
        })
    })
        .then(res=>res.json())
        .then(json=>console.log(json))

}
}
   
  return (
    <div className='bg-slate-500  h-screen flex justify-center items-center w-screen'>
        
<div className='flex flex-col gap-6 items-center w-80'>
    <h1 className="text-center">Login </h1>
        <input  className=" w-full rounded-full"  name="username" type="text" placeholder="username" onChange={hande} />
        <input   className=" w-full rounded-full" name="password" type="password"  placeholder="password" onChange={hande}/>
        <button  className="bg-sky-500 w-24 h-10 rounded-full" onClick={sub}>Login</button>

</div>
        
    </div>
  )
}

export default Lpgin