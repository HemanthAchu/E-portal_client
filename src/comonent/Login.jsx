import React, { useState } from 'react'
import { Form,FloatingLabel } from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI,registerAPI } from '../services/allAPI';

function Login({insideRegister,setuser}) {
  const navigate =useNavigate()
  const [userInputs,setuserInputs] =useState({
    username:"",
    email:"",
    password:""
  })
  console.log(userInputs);



  const handleRegister =async(e)=>{
    e.preventDefault()
    if(userInputs.email && userInputs.password && userInputs.username){
  //api call
  try{
    const result =await registerAPI(userInputs)
    console.log(result);
    if(result.status==200){
      toast.success(`welcome ${result.data.username}...please login to explore our website`)
      setuserInputs({username:"",email:"",password:""})
      setTimeout(() => {
        navigate('/login')
      }, 2000);
      setuser(result.data.username)
      
    }else{
      toast.warning(result.message)
      setTimeout(() => {
        setuserInputs({username:"",email:"",password:""})
      }, 2000);
    }
  
  }catch(err){
  console.log(err);
  }
  
    }else{
  toast.info('Fill the form completely')
    }
  
    }


  

    
  const handleLogin = async(e)=>{
 e.preventDefault()
 if(userInputs.email && userInputs.password){
  try{
    const result =await loginAPI(userInputs)
if(result.status==200){
  sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
  sessionStorage.setItem("token",result.data.token)
toast.warning(`welcome ${result.data.existingUser.username}`)
setuserInputs({username:"",email:"",password:""})
setTimeout(()=>{
navigate('/user-home')
},2000)
}else{
  toast.error(result.response.data)
}

  }catch(err){
console.log(err);
  }
 }
  }
  return (
    <>
  
    <div className='container '>
      <div style={{height:"fit-content"}} className='row w-100 mt-3 shadow d-flex justify-content-center align-items-center '>
        <div className="col-lg-6">

         <div  className=' p-4 d-flex justify-content-center align-items-center'>
         <div className=' border w-100 p-3 shadow'>
                <h2>WELCOME BACK</h2>
                <Form>
                  {insideRegister?<h1 className='text-center'>Register Here</h1>:<h1 className='text-center'>Login Here</h1>}
      {insideRegister && 
     

  
       <FloatingLabel
        controlId="floatingInput"
        label="Username"
        className="mb-1"
      >
        <Form.Control value={userInputs.username} onChange={e=>setuserInputs({...userInputs,username:e.target.value})} type="email" placeholder="name@example.com" />
        </FloatingLabel>

      }
    <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-1"
      >
        <Form.Control value={userInputs.email} onChange={e=>setuserInputs({...userInputs,email:e.target.value})} type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control value={userInputs.password} onChange={e=>setuserInputs({...userInputs,password:e.target.value})} type="password" placeholder="Password" />
      </FloatingLabel>
      {
        insideRegister?<div className='mt-3'>
          <button onClick={(e)=>handleRegister(e)} className='btn btn-primary'>Register</button>
          <p>Already have an Account? click here to <Link to={'/login'}>Login</Link></p>
        </div> :
        <div className='mt-3'>
          <button onClick={(e)=>handleLogin(e)} className='btn btn-primary'>Login</button>
          <p>New User? Click here to <Link to={'/register'}>Register</Link></p>
        </div>
        
      }
    </Form>
            </div>
         </div>
        </div>
        
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </div>
    </>
  )
}

export default Login
