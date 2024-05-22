import React, { useEffect, useState } from 'react'
import { Button,  } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addFileComplaintAPI } from '../services/allAPI';
import  {toast,ToastContainer} from 'react-toastify'

function FileCompliant() {
const [fileComplaint,setfileComplaint]=useState({
username:"",
subject:"",
complaint:"",
images:"",
complaintId:"",
pendingStatus:""

})

console.log(fileComplaint);
  
const seun = JSON.parse(sessionStorage.getItem("existingUser"))
const token = sessionStorage.getItem("token").split(1,15)[1]
const sum = seun ? seun.username : "";
const time = new Date().getTime()
console.log(token);




const handleUpload = async()=>{
  console.log("Current complaint ID:", fileComplaint.complaintId);


 
  setfileComplaint({...fileComplaint,complaintId:time,username:sum,pendingStatus:false})
 

  const {username,subject,complaint,images,complaintId ,pendingStatus}=fileComplaint
  console.log(fileComplaint);
if(!username || !subject || !complaint || !images || !complaintId){
console.log("plz fill the form");
toast.warning("plz fill the form")
}else{
 console.log(fileComplaint);
 const reqBody =new FormData()
 reqBody.append("username",username)
 reqBody.append("subject",subject)
 reqBody.append("complaint",complaint)
 reqBody.append("images",images)
 reqBody.append("complaintId",complaintId)
 reqBody.append("pendingStatus",pendingStatus)
const token =sessionStorage.getItem("token")
if(token){
  const reqHeader ={
    "Content-Type":"multipart/form-data",
    "Authorization":`Bearer ${token}`
  }
  try{
console.log(reqBody);
    const result =await addFileComplaintAPI(reqBody,reqHeader)
    console.log(result,200);
    if(result.status==200){
      toast.success("success")
    setfileComplaint({
      username:"",
      subject:"",
      complaint:"",
      images:"",
      complaintId:"",
      pendingStatus:""
      
      })
    }else{
      toast.warning(result.message)
    }

  }catch(err){

  }
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
<h2 className='text-center'>File a Compliant</h2>
<input  placeholder='Enter the Subject' type="text"value={fileComplaint.subject}    onChange={(e)=>setfileComplaint({...fileComplaint,subject:e.target.value})} className='form-control mb-3' />
<FloatingLabel controlId="floatingTextarea2" label="Compliants"  >
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }} value={fileComplaint.complaint}    onChange={(e)=>setfileComplaint({...fileComplaint,complaint:e.target.value})}
        />
      </FloatingLabel>

      <p className='ms-2 mt-2' >my name is hemanth so that is to the form of rrhr </p>
      <input className='form-control' type="file"  onChange={(e)=>setfileComplaint({...fileComplaint,images:e.target.files[0]})} />
      <center onClick={(e)=>handleUpload(e) }     className='m-3'><Button>Upload</Button></center>
            </div>
            <ToastContainer position='top-center' theme='colored' autoClose={3000} />
        </div>
    </div>
  )
}

export default FileCompliant
