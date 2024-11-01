import React, { useState } from 'react'
import Button from '../components/Button'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../context/Auth-context'
// let RegisterUrl="http://localhost:3000/api/v1/register"
let Url="http://localhost:3000/api/v1/register"
const Login = () => {
  let [isLogin,setIsLogIn]=useState(false)
  let {GenerateToken}=useAuth()
  let [user,setUser]=useState({
         name:"",
         email:"",
         phone:"",
         password:""
  })
  let Navigate=useNavigate()
  let handleChange=(e)=>{

    let name=e.target.name;
    let value=e.target.value
   
    setUser((pre)=>{
        return{
          ...pre,
          [name]:value
        }
    })


  }
  let handleSubmit=async(e)=>{
    e.preventDefault();
let url;
  let response=await fetch(`http://localhost:3000/api/v1/${isLogin?"register":"login"}`,
    {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
    }
  )
 let userData=await response.json()

  if(response.ok){

    let token=userData.token
GenerateToken(token,userData.user)
    setIsLogIn(false)
    !isLogin?Navigate('/'):""
    setUser({ name:"",
      email:"",
      phone:"",
      password:""})
    
      
    }
    else{
     alert(userData.error)
    }
  }
 
  return (
    <section className='login-section py-8 bg-yellow-50'>
      <div className="container mx-auto">
               <div className='flex justify-center items-center flex-col  '>
           
               <form action="" onSubmit={handleSubmit} className='w-[80%] md:w-[50%] lg:w-[34%] block shadow-lg p-6 rounded bg-white '>
               <h2 className=' text-3xl  text-center my-2'>{isLogin?"Signup":" Login"}</h2>
             {

              isLogin&&<>  <label htmlFor="name" className='block text-lg'>User Name: </label>
               <input type="text" name="name" id="name" className='w-full outline-secondary outline-none rounded  p-2 my-2' value={user.name} onChange={handleChange} /></>
             }
               <label htmlFor="email" className='block text-lg'>Email: </label>
               <input type="email" name="email" id="email" className='w-full outline-secondary outline-none rounded  p-2 my-2' value={user.email} onChange={handleChange} />
              {
                isLogin&&<> <label htmlFor="phone" className='block text-lg'>Phone: </label>
               <input type="text" name="phone" id="phone" className='w-full outline-secondary outline-none rounded  p-2 my-2' value={user.phone} onChange={handleChange}/></>
              }
               <label htmlFor="password" className='block text-lg'>Password: </label>
               <input type="password" name="password" id="password" className='w-full outline-secondary outline-none rounded  p-2 my-2' value={user.password} onChange={handleChange} />
               <Button text={isLogin?"Signup":" Login"} ></Button>
              <p>I {!isLogin &&"don't"} have  an account ? <span className='text-secondary cursor-pointer' onClick={()=>{setIsLogIn(!isLogin)}}> {isLogin?"Login":"Signup"}  </span> </p>
                </form>
               </div>
      </div>
     
    </section>
  )
}

export default Login
