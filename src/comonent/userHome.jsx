import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import 'animate.css';
function UserHome() {
  return (
<>
<div className='d-flex justify-content-center align-items-center animate__animated animate__bounce'style={{height:"60vh"}}>
      <div className='container row shadow' style={{height:"fit-content"}}>
<div className='col-lg-8 text-center d-flex justify-content-center align-items-center '><h3>Every Months we complete 1000+ waste report</h3></div>
<div  className='col-lg-4 d-flex justify-content-center align-items-center'>
    <img  className='w-75' src="https://imgs.search.brave.com/AI9WY-arrtGEOJDpzHrA96gsVL1n20Dj0--AeFaH2oY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTIuZ2lwaHkuY29t/L21lZGlhLzNvN1RL/SnIwcmNubjJUc3dB/VS9naXBoeS5naWY_/Y2lkPTc5MGI3NjEx/aXlsajltdXAzdXhy/MnJoYm5lZDM0dnNq/Y2l2d2wyaGNjdjNv/ZnRnMSZlcD12MV9n/aWZzX3NlYXJjaCZy/aWQ9Z2lwaHkuZ2lm/JmN0PWc.gif" alt="" />
</div>
      </div>
    </div>

    <div className='container '>
        <h1 className='text-center'>Services</h1>
       <center>
       <div style={{flexWrap:"wrap"}} className='w-100 d-flex justify-content-between mt-5'>
        <Card className='p-2 ms-3 mb-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" height="200px" src="https://imgs.search.brave.com/ZJhPPgfU8-JkI5wPypRBhX_-rmYXkfVNirTsNZnCfK8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/d2lraWhvdy5jb20v/aW1hZ2VzL3RodW1i/L2IvYjcvRmlsZS1h/LUNvbXBsYWludC1B/Z2FpbnN0LVlvdXIt/SE9BLU1hbmFnZW1l/bnQtQ29tcGFueS1T/dGVwLTE4LmpwZy92/NC00NjBweC1GaWxl/LWEtQ29tcGxhaW50/LUFnYWluc3QtWW91/ci1IT0EtTWFuYWdl/bWVudC1Db21wYW55/LVN0ZXAtMTguanBn" />
      <Card.Body>
        
        
       <center>
       <Card.Title>File a Complaint</Card.Title>
       <Link to={'/file-compliant'}>
       <Button className='btn-dark' variant="primary ">Open</Button>
       </Link>
       </center>
      </Card.Body>
    </Card>
    <Card  className='p-2 ms-3 mb-4' style={{ width: '18rem', }}>
      <Card.Img variant="top" height="200px" src="https://imgs.search.brave.com/fUt0v2u6TURYAc5Ha3YclmLNCEnSPd6-hzo9FuunUgc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZG93bnRvZWFydGgu/b3JnLmluL2xpYnJh/cnkvbGFyZ2UvMjAx/OC0wOS0xOS8wLjIx/MjQyMDAwXzE1Mzcz/NDQ5Njlfd2FzdGUu/anBn" />
      <Card.Body>
        
        
       <center>
       <Card.Title>Report Waste</Card.Title>
       <Link to={'/report-watse'}>
       <Button className='btn-dark' variant="primary ">Open</Button>
       </Link>
       </center>
      </Card.Body>
    </Card>
    <Card className='p-2 ms-3 mb-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" height="200px"   src="https://imgs.search.brave.com/D9UGH38HVT7mriZU97Z-gmKmA1XTFPgncwCT14XQPhE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vNmYxYzU0/NzQ5Y2FkMWRiNjg5/OGVlZTc1OWU2OTgy/ODBiMGNjODBkMy0z/OTN4Mzg5LnBuZz93/PTEwODAmcT03Mg"     />
      <Card.Body>
        
        
       <center>
       <Card.Title>Online Market</Card.Title>
       <Link to={'/file-compliant'}>
       <Button className='btn-dark' variant="primary ">Open</Button>
       </Link>
       </center>
      </Card.Body>
    </Card>
    <Card className='p-2 ms-3 mb-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" height="200px"  src="https://imgs.search.brave.com/ZJhPPgfU8-JkI5wPypRBhX_-rmYXkfVNirTsNZnCfK8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/d2lraWhvdy5jb20v/aW1hZ2VzL3RodW1i/L2IvYjcvRmlsZS1h/LUNvbXBsYWludC1B/Z2FpbnN0LVlvdXIt/SE9BLU1hbmFnZW1l/bnQtQ29tcGFueS1T/dGVwLTE4LmpwZy92/NC00NjBweC1GaWxl/LWEtQ29tcGxhaW50/LUFnYWluc3QtWW91/ci1IT0EtTWFuYWdl/bWVudC1Db21wYW55/LVN0ZXAtMTguanBn" />
      <Card.Body>
        
        
       <center>
       <Card.Title>Our Community</Card.Title>
       <Link to={'/file-compliant'}>
       <Button className='btn-dark' variant="primary ">Open</Button>
       </Link>
       </center>
      </Card.Body>
    </Card>
        </div>
       </center>
    </div>
</>
  )
}

export default UserHome
