import{useState}from"react"
import axios from "axios"
function SingUp() {
    const[user,setuser]=useState({
        name:"",  
        username:"",
        email:'',
        password:''
    })
const hande =(e)=>{
    setuser({...user,[e.target.name]:e.target.value})
}

const sub=()=>{
axios.post("https://fakestoreapi.com/users",user).then(res=>{
    console.log(res);
    
})  
}
   
  return (
    <div className='bg-slate-500  h-screen flex justify-center items-center w-screen'>
        
<div className='flex flex-col gap-6 items-center w-80'>
    <h1 className="text-center">Sign up</h1>
        <input className=" w-full rounded-full" name="name" type="text"  placeholder="name" onChange={hande}/>
        <input  className=" w-full rounded-full"  name="username" type="text" placeholder="username" onChange={hande} />
        <input  className=" w-full rounded-full"  name="email" type="email"  placeholder="email" onChange={hande}/>
        <input   className=" w-full rounded-full" name="password" type="password"  placeholder="password" onChange={hande}/>
        <button  className="bg-sky-500 w-24 h-10 rounded-full" onClick={sub}>Sign up</button>

</div>
        
    </div>
  )
}

export default SingUp