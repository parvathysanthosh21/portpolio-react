import React from 'react'

function Skill() {
  return (
    <>
      <div style={{ textAlign: 'center', textTransform: 'uppercase' }}><h5>My Skills</h5></div>

      <div className='d-flex justify-content-evenly align-items-center'>

        <div  className='about-content mt-5 d-flex flex-column justify-content-around align-items-center border rounded p-3 shadow' style={{ width: '25%', height: '35vh', textJustify:'auto'}}>
          <p><i class="fa-brands fa-html5 fa-2xl"></i>  HTML</p>
          <p><i class="fa-brands fa-css3-alt fa-2xl"></i >  CSS</p>
          <p><i class="fa-brands fa-js fa-2xl"></i>  JavsScript</p>
          <p><i class="fa-brands fa-bootstrap fa-2xl"></i>  Bootstrap</p>
        </div>

        <div className='about-content mt-5 d-flex flex-column justify-content-around align-items-center border rounded p-3 shadow' style={{ width: '25%', height: '35vh'}}>
        <p><i class="fa-brands fa-figma fa-2xl"></i> Figma</p>
        <p><i class="fa-brands fa-react fa-2xl"></i>  React</p>
        <p><i class="fa-brands fa-github fa-2xl"></i>  GitHub</p>
        <p><i class="fa-brands fa-php fa-2xl"></i>   PHP</p>
        </div>


      </div>

    </>
  )
}

export default Skill