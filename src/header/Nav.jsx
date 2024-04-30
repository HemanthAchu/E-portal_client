import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link, useNavigate } from 'react-router-dom';

function Navigation() {
  const navigate =useNavigate()
  const [loginStatus,setLoginStatus] =useState(false)
  useEffect(()=>{
 const hem=()=>{

  if(sessionStorage.getItem('token')){
    setLoginStatus(true)
    
        }else{
    setLoginStatus(false)
        }
 }
hem()
  })
  
  const handlelogin=()=>{
    sessionStorage.removeItem('token')
    navigate('/')
  }
 
  return (
    <>
      <Navbar expand="lg" className="shadow">
        <Container>
          <Navbar.Brand href="/"><h2 className='text-secondary'>
          E Portal</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
      { loginStatus? <Nav className="me-auto w-100">
           
             <Link to="/"> <Button className='me-2 mb-1'>Home</Button></Link>
              <Link to="/user-home"> <Button className='me-2  mb-1'>Services</Button></Link>
              <Link to="/compliant-status"> <Button className='me-2  mb-1'>Compliants</Button></Link>
              <Link to="/waste-status"> <Button className='me-2  mb-1'>Waste reports</Button></Link>
              <Link to="/"> <Button className='me-2  mb-1'>About</Button></Link>
             
             <Button onClick={handlelogin} className=' btn-info me-2  mb-1'>logOut</Button>
            </Nav>:<></>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
