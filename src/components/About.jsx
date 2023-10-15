import React from 'react'
import  cv from '../image/parvathy-cv.pdf'

function About() {
  return (
    <>
          <h3 style={{textAlign:'center'}}>About Me</h3>
          <div className='container d-flex justify-content-around align-items-center'>
      <div>
        <img style={{width: '500px', height:'450px'}} src="https://i.pinimg.com/originals/e7/26/c7/e726c74ac081eed50feee1433d12c998.gif" alt="" />
      </div>
      <div className='w-50'>
        <p >
        I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, HTML, CSS,Figma and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
        </p>
        <a className='btn mt-3' style={{backgroundColor:'#9f4ca3',color:'white'}} href={cv}download>DOWNLOAD CV</a>
      </div>
     
</div> 
    </>
  )
}

export default About



