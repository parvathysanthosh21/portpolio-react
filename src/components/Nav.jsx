import React from 'react'

function Nav() {
  return (
    <> 
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
    <a class="navbar-brand" href="#">Parvathy</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-5 ms-auto me-3 mb-lg-0">
        <li class="nav-item me-3">
          <a class="nav-link " aria-current="page" href="home.jsx">Home</a>
        </li>
        <li class="nav-item me-3">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item me-3">
          <a class="nav-link" href="#">Skills</a>
        </li>
        <li class="nav-item me-3">
          <a class="nav-link" href="#">Projects</a>
        </li>
        <li class="nav-item me-3">
          <a class="nav-link" href="#">Contacts</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
   </>
  )
}

export default Nav