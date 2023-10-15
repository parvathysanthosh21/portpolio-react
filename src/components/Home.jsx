import React from 'react'
import profile from '../image/img1.jpg'
function Home() {
  return (
    <>
    <div className='d-flex align-items-center justify-content-around mt-5 mb-5' style={{height:'80vh'}}>
      <div>
        <h3 className='fw-bolder'>Hello!</h3>
        <h3 >I'm Parvathy Santhosh</h3>
        <h5>Web Developer</h5>
        <p>I'am creative web developer , and i'am very passionate and dedicated to my work...</p>
        <a style={{backgroundColor:'violet',color:'white'}} className='btn' href="https://www.linkedin.com/in/parvathy-santhosh-932561275/">Let's Connect</a>
      </div>
      <div>
        <img className='img-fluid mt-5' style={{borderRadius:'50%',width:'350px',height:'400px'}}  src={profile} alt="profilepic" />
      </div>
    </div>
    </>
  )
}

export default Home