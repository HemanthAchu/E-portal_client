import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { getuserfileComplaintAPI, removeComplaintAPI } from '../services/allAPI'
import { SERVER_URL } from '../services/serverUrl'



function Complaints() {

  const [comp,setcomp]=useState([])
  useEffect(()=>{

    getUser()
  })

  const handledelete=async(id)=>{
    const token = sessionStorage.getItem("token")
    
    const reqHeader ={
      
      "Authorization":`Bearer ${token}`
    }

    const result = await removeComplaintAPI(id,reqHeader)
getUser()
  }
  
  const getUser=async ()=>{
    const token = sessionStorage.getItem("token")
    
    const reqHeader ={
      
      "Authorization":`Bearer ${token}`
    }

    const result =await getuserfileComplaintAPI(reqHeader)
   
    setcomp(result.data)
  }
 
  return (
    <div className='container'>
    <div className='shadow  row'>
      <div className='col-lg-3 mt-3' style={{height:"fit-content"}}>
<h3>Compliants</h3>
<p className='ms-1'>Search</p>
<input type="text" className='form-control' placeholder='Enter your Compliants...' />
      </div>
      <div className="col-lg-9 ">
   {comp?.map((Complaintsuser)=>(
    <div className="row shadow mt-3">
        <div className="col-lg-6  p-3 ">
        <center><Button>{`Compliants ID ${Complaintsuser?.complaintId}`}</Button></center>
    <img style={{height:"200px"}} className='w-75 m-3' src={`${SERVER_URL}/uploads/${Complaintsuser?.images}`} alt=""/>
        </div>
        <div className="col-lg-6 ">
        <h3>Subject : {Complaintsuser?.subject}</h3>
        <p style={{textAlign:"justify"}}> <span style={{fontSize:"20px"}}>Complaint:</span> {Complaintsuser?.complaint}</p>
        <div style={{height:'100px'}} className='d-flex justify-content-around align-items-end'>
          {Complaintsuser.pendingStatus? <Button className='btn-success' >Admin Viewed</Button>:<Button className='btn-secondary' >status pending</Button>}
           {Complaintsuser.pendingStatus?<p>Aproved</p>: <p>status pending</p>}
            <Button onClick={()=>handledelete(Complaintsuser?.complaintId)} className='btn-danger' >Delete</Button>
        </div>
        </div>
      </div>
   ))   }

    
      </div>
    </div>
    </div>
  )
}

export default Complaints
