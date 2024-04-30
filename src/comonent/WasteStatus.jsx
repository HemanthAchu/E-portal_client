import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

import Card from 'react-bootstrap/Card';
import { getuserWasteReportAPI, removeWastereportAPI } from '../services/allAPI';
import { SERVER_URL } from '../services/serverUrl';

function WasteStatus() {
  const [comp,setcomp]=useState([])
  useEffect(()=>{

    getUser()
  })

  const handledelete=async(id)=>{
    
    const token = sessionStorage.getItem("token")
    console.log(token);
    const reqHeader ={
      
      "Authorization":`Bearer ${token}`
    }

    const result = await removeWastereportAPI(id,reqHeader)
getUser()
  }
  
  const getUser=async ()=>{
    const token = sessionStorage.getItem("token")
    console.log(token);
    const reqHeader ={
      
      "Authorization":`Bearer ${token}`
    }

    const result =await getuserWasteReportAPI(reqHeader)
    console.log(result.data);
    setcomp(result.data)
  }
  return (
    <div className='container'>
    <div className='shadow  row'>
      <div className='col-lg-3  mt-3  ' style={{height:"fit-content"}}>
<h3>Waste Reports</h3>
<p className='ms-1'>Search</p>
<input type="text" className='form-control' placeholder='Enter your reports...' />
      </div>
      <div style={{flexWrap:"wrap"}} className='col-lg-9 d-flex justify-content-between '>
    {comp.map((wastereport,index)=>(
 <div key={index} className='my-3 mx-2'>
 <Card style={{ width: '18rem' }}>
 <Card.Img style={{height:"30vh"}} variant="top" src={`${SERVER_URL}/uploads/${wastereport?.images}`}  />
 <Card.Body>
   <Card.Title>Type: {wastereport?.wastetype}</Card.Title>
   <Card.Title> Location : {wastereport.location}</Card.Title>
   <Card.Text>
     {wastereport.date}
   </Card.Text>
  <div className='d-flex justify-content-between align-items-center'>
 {wastereport.pendingStatus?<Button className='btn-success'>Viewed</Button> : <Button className='btn-dark p-'>pending</Button>}
  <Button onClick={()=>handledelete(wastereport.wasteId)} >Delete</Button>
  </div>
 </Card.Body>
</Card>
 </div>
    )) }
      
     

      
      </div>
    </div>
    </div>
  )
}

export default WasteStatus
