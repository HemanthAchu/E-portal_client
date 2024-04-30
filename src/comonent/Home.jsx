import React, { useEffect, useState } from 'react'
import  Nav  from '../header/Nav'
import {Link} from 'react-router-dom'

function Home() {
  const [loginStatus,setLoginStatus] =useState(false)
  useEffect(()=>{
    if(sessionStorage.getItem('token')){
setLoginStatus(true)

    }else{
setLoginStatus(false)
    }

  },[])
  return (
    <div>
      
         <div className='container '>
      <div style={{height:'70vh'}} className='row w-100 shadow mt-3'>
       <div  className="col-lg-6 d-flex align-items-center justify-content-center ">
       <div  >
          <h1 className='d-flex align-items-center' style={{fontSize:"88px"}}> <i class="fa-solid fa-arrow-trend-up me-2 "></i> E-PROTAL</h1>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quos tempore dolorem ea necessitatibus expedita incidunt tenetur ullam beatae neque vero recusandae error nobis est, quaerat obcaecati vitae debitis. Sequi!</p>
      {loginStatus? <Link style={{textDecoration:'none'}} to={'/user-home'}>
         <button className='btn btn-info d-flex justify-content-between align-items-center'>Services <i class="fa-solid fa-arrow-right ms-2 "></i></button>
         </Link> : <Link style={{textDecoration:'none'}} to={'/login'}>
         <button className='btn btn-info d-flex justify-content-between align-items-center'>Start to Explore <i class="fa-solid fa-arrow-right ms-2 "></i></button>
         </Link>}
        </div>
       </div>
        
        <div   className="col-lg-6  d-flex align-items-center justify-content-center  p-2 "><img style={{width:"60%",opacity:"40%"}} src="https://imgs.search.brave.com/4tFvx_dYvOhKDK7ura5Lnf6OAQ80QjOdgs20EyH8KxU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzg2Lzk4LzEw/LzM2MF9GXzg2OTgx/MDg1X1cybzZINXl2/alVWUEN3N1ZXcWhB/NzNxV0hxdjZYNkF1/LmpwZw" alt="image" /></div>
      </div>
    </div>
    </div>
  )
}

export default Home
