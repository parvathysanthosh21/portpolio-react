import React from 'react'

function Contact() {
  return (
    <>
<div className='d-flex align-items-center justify-content-around mt-5'>
<div>  
    <h2 className='fw-bolder'>CONTACT ME</h2>
    <h6>Feel Free To Reach Out</h6>   
</div>
<div style={{lineHeight:'30px'}} className='d-flex flex-column'>
  <a  style={{textDecoration:'none', color:'black'}} href=""><i class="fa-solid fa-envelope fa-lg"></i>  parvathysanthosh231@gmail.com</a>
  <a  style={{textDecoration:'none', color:'black'}} href="https://github.com/parvathysanthosh21"><i class="fa-brands fa-github fa-lg"></i>  parvathysanthosh21</a>
  <a  style={{textDecoration:'none', color:'black'}} href=""><i class="fa-solid fa-phone"></i>  859083****</a>
  <a  style={{textDecoration:'none', color:'black'}} href="https://www.linkedin.com/in/parvathy-santhosh-932561275/"><i class="fa-brands fa-linkedin fa-lg"></i>  parvathy-santhosh</a>
</div>
</div>

    </>
  )
}

export default Contact