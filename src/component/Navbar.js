import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
        
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
            <div class="container-fluid">
                <Link class="navbar-brand" to={'/'}>Course  </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link class="nav-link active" to='/'>Course</Link>
                    <Link class="nav-link active" to='/view'>Courseview</Link>
                </div>                                                                                                                                                                                                                                        
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar