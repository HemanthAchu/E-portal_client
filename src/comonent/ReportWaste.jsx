import React, { useState } from 'react'
import { Button, } from 'react-bootstrap';
import  {toast,ToastContainer} from 'react-toastify'
import '../App.css'
import { AddwasteReportAPI } from '../services/allAPI';
function ReportWaste() {

  const [wasteReport ,setwasteReport]=useState({
username:"",
location:"",
date:"",
wastetype:"",
images:"",
wasteId:"",
pendingStatus:""
  })

console.log(wasteReport);
  const seun = JSON.parse(sessionStorage.getItem("existingUser"))

const sum =  seun.username
const time = new Date().getTime()




  const handleuploads=async(e)=>{
    e.preventDefault()
  
    setwasteReport({...wasteReport,wasteId:time,username:sum,pendingStatus:false})

const { username,location,date,wastetype,images,wasteId,pendingStatus} =wasteReport
if( !username  || !location || !date || !wastetype || !images || !wasteId ){
  toast.warning("plz fill completely")
}else{
  
const reqBody =new FormData()
reqBody.append("username",username)
reqBody.append("location",location)
reqBody.append("wastetype",wastetype)
reqBody.append("wasteId",wasteId)
reqBody.append("date",date)
reqBody.append("images",images)
reqBody.append("pendingStatus",pendingStatus)


const token =sessionStorage.getItem("token")

if(token){

  const reqHeader ={
    "Content-Type":"multipart/form-data",
    "Authorization":`Bearer ${token}`
  }
 
   try{

    const result =await AddwasteReportAPI(reqBody,reqHeader)
    console.log(result);
    console.log("asijfhasif");
    if(result.status==200){
     toast.success("success")
     setwasteReport({
      username:"",
      location:"",
      date:"",
      wastetype:"",
      images:"",
      wasteId:"",
      pendingStatus:""
      
        })
    }else{
     toast.warning(result.message
     )
    }
   }catch(err){

toast.warning(err)
   }

}else{
  toast.warning("fake token ")
}

  
}

  }

  return (
    <div className='container'>
    <div className="row mt-3 ">
        <div className="col-lg-6">
<img className='w-75' src="https://imgs.search.brave.com/PTJjIlV1Pz4jhoWkiKXvrbv8ugPNDvpmzC6v7ByiFD4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA5/MzQ1NzI3MC92ZWN0/b3IvZmlsZS1pbGx1/c3RyYXRpb24uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXQ2/QVFKOElZSUFqR3RV/QTJpSjUxTjVJQW1W/dk8xajlIOWluV3BD/YzR0Q0E9" alt="image" />
        </div>
        <div className="col-lg-6 shadow">
<h2 className='text-center'>waste Report</h2>
<div>
<p   >Location</p>
<input value={wasteReport.location}  onChange={(e)=>setwasteReport({...wasteReport,location:e.target.value})}  placeholder='Enter the location' type="text" className='form-control mb-3' />
</div>
<>
<p>date</p>
<input value={wasteReport.date}  onChange={(e)=>setwasteReport({...wasteReport,date:e.target.value})}  placeholder='Enter the location' type="date" className='form-control mb-3' />
</>
<div>
    <p>Waste Type</p>
    
   
    <select value={wasteReport.wastetype} onChange={(e)=>setwasteReport({...wasteReport,wastetype:e.target.value})} className="custom-select">
  <option value="">Select.....</option>
  <option value="Mineral waste">Mineral waste</option>
  <option value="Inorganic waste">Inorganic waste</option>
  <option value="Liquid waste">Liquid waste</option>
  <option value="Biodegradable waste">Biodegradable waste</option>
  <option value="Non-biodegradable waste">Non-biodegradable waste</option>
  <option value="Hazardous waste">Hazardous waste</option>
</select>


    
</div>

<p>if any images</p>
<input onChange={(e)=>setwasteReport({...wasteReport,images:e.target.files[0]})} type="file" className='form-control' />

<center className='my-2'>
  <Button onClick={(e)=>handleuploads(e)}>Upload</Button>
</center>
        </div>
    </div> 
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
</div>
  )
}

export default ReportWaste
