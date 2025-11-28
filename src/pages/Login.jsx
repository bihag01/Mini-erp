
import {login} from "../components/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../components/useLocalStorage";



export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [tokens, setTokens] = useLocalStorage("miniERPTokens");

  const clickLogin =  async() => {
    try{
      const data =  await login(email, password);
      if(data.access_token) {
        setTokens({accessToken: data.access_token, refreshToken: data.refresh_token});
        navigate('/products')
      }      

    }catch(error){
      console.log(error);
      if (error.status === 400) {
            alert("Credenciales incorrectas");
        }
    }
    
  }

    return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className="w-1/4 h-[40%] rounded-lg bg-[#121a23] flex flex-col justify-center items-center gap-y-5" >
        <div className="">
          <h1>Bienvenido</h1>
        </div>
        <div className="">
          <p className="text-white py-2">email</p>
          <input  value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" className="py-2  bg-[#1f2937]  rounded-md border"/>

          <p className="text-white py-2">contrasena</p>
          <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" className="py-2 bg-[#1f2937]  rounded-md border"/>
        </div>
        <button  onClick={clickLogin} className="hover:cursor-pointer border rounded-md w-[200px] h-[10]" >Iniciar sesion</button>
        
      </div>
      
    </div>
  )
}