import React from 'react'

const View = () => {
  return (
    <div>
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
                    <Link class="nav-link active" to='/view'>Viewall</Link>
                </div>
                </div>
            </div>
        </nav>
    </div>
    </div>
  )
}

export default View