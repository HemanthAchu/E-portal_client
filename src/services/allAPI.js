import { commonAPI } from "./Common"
import { SERVER_URL } from "./serverUrl"


export const registerAPI =async(reqbody)=>{
    return await commonAPI('POST',`${SERVER_URL}/register`,reqbody)
}
export const loginAPI =async(reqbody)=>{
    return await commonAPI('POST',`${SERVER_URL}/login`,reqbody)
}

export const addFileComplaintAPI =async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${SERVER_URL}/filecomplaint`,reqBody,reqHeader)
}
export const getuserfileComplaintAPI =async(reqHeader)=>{
    return await commonAPI('GET',`${SERVER_URL}/userComplaint`,"",reqHeader)
}




export const AddwasteReportAPI =async (reqBody,reqHeader)=>{
    return await commonAPI('POST',`${SERVER_URL}/wasteReports`,reqBody,reqHeader)
}
export const getuserWasteReportAPI =async(reqHeader)=>{
    return await commonAPI('GET',`${SERVER_URL}/userWastereport`,"",reqHeader)
}
export const removeWastereportAPI= async(id,reqHeader)=>{
    return await commonAPI('DELETE',`${SERVER_URL}/removewaste/${id}`,{},reqHeader)
}

export const removeComplaintAPI= async(id,reqHeader)=>{
    return await commonAPI('DELETE',`${SERVER_URL}/removeComplaint/${id}`,{},reqHeader)
}

