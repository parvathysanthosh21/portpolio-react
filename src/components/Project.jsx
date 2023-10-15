import React from 'react'
import picture from '../image/Screenshot 2023-10-10 223045.png'
import cakepic from '../image/cake.png'
import plant from '../image/plant store.png'
function Project() {
  return (
    <div>
<div  style={{textAlign:'center',marginTop:'10%'}}>
  <h5>PROJECTS</h5>
  <h6>Most Recent Works</h6>
</div>
<div className='d-flex align-items-center justify-content-around mt-5'>
  <div  class="card" style={{width: "23rem"}}>
    <img style={{height:'40vh'}} src={picture} class="card-img-top" alt=""/>
    <div class="card-body">
      <h5 class="card-title">Wedding Website</h5>
      <a href="https://parallax-alanparks-photography.netlify.app" class="btn btn-primary">Demo</a>
    </div>
  </div>
  <div  class="card" style={{width: "23rem"}}>
    <img style={{height:'40vh'}} src={cakepic} class="card-img-top" alt=""/>
    <div class="card-body">
      <h5 class="card-title">Cake Website</h5>
      <a href="https://sweet-cake-bakehouse.netlify.app" class="btn btn-primary">Demo</a>
    </div>
  </div>
  <div  class="card" style={{width: "23rem"}}>
    <img style={{height:'40vh'}} src={plant} class="card-img-top" alt=""/>
    <div class="card-body">
      <h5 class="card-title">Plant Website</h5>
      <a href="https://pronia.netlify.app" class="btn btn-primary">Demo</a>
    </div>
  </div>
</div>

<div className='d-flex align-items-center justify-content-around mt-5 mb-5'>
  <div  class="card" style={{width: "23rem"}}>
    <img style={{height:'40vh'}} src='https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_22595_16539923345862310.jpg' class="card-img-top" alt=""/>
    <div class="card-body">
      <h5 class="card-title">BMI Calculator</h5>
      <a href="https://body-mass-index-calc2.netlify.app" class="btn btn-primary">Demo</a>
    </div>
  </div>
  <div  class="card" style={{width: "23rem"}}>
    <img style={{height:'40vh'}} src='https://m.economictimes.com/thumb/msid-95379195,width-1920,height-1080,resizemode-4,imgsize-20954/wordle-507-november-8-hints-and-answer-for-todays-word-game.jpg' class="card-img-top" alt=""/>
    <div class="card-body">
      <h5 class="card-title">Wordle Game</h5>
      <a href="https://game-wordl-9df4a5.netlify.app" class="btn btn-primary">Demo</a>
    </div>
  </div>
  <div  class="card" style={{width: "23rem"}}>
    <img style={{height:'40vh'}} src='https://thumbs.dreamstime.com/b/partly-cloudy-simple-icon-blue-background-173636078.jpg' class="card-img-top" alt=""/>
    <div class="card-body">
      <h5 class="card-title">Weather Map</h5>
      <a href="https://weather-mapcities.netlify.app" class="btn btn-primary">Demo</a>
    </div>
  </div>
</div>
    </div>
  )
}

export default Project