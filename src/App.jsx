
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Home from './comonent/Home'
import Footer from './footer/footer'
import "./bootstrap.min.css"
import Nav from './header/Nav'
import Login from './comonent/Login'
import   UserHome from './comonent/userHome'
import Complaints from './comonent/Complaints'
import WasteStatus from './comonent/WasteStatus'
import FileCompliant from './comonent/File-Compliant'
import ReportWaste from './comonent/ReportWaste'
import { useState } from 'react'
import AdminStatus from './comonent/AdminStatus'
function App() {
  
const [user,setuser]=useState('')
  return (
<>
{<Nav user={user} />}
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/file-compliant' element={<FileCompliant/>}/>
<Route path='/report-watse' element={<ReportWaste/>}/>
<Route path='/waste-status' element={<WasteStatus/>}/>
<Route path='/user-home' element={<UserHome/>}/>
<Route path='/compliant-status' element={<Complaints/>}/>
<Route path='/login' element={<Login setuser={setuser} />}/>
<Route path='/register' element={<Login  insideRegister  />}/>
<Route path='/adminStatus' element={<AdminStatus/>} />
</Routes>
<Footer/>
</>
  )
}

export default App
