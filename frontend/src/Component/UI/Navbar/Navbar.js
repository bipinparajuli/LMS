import React from 'react'
import {FaBookOpen} from 'react-icons/fa'
const Navbar = ({name}) => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">
    <div className="row">
    <div className="col-6">
<FaBookOpen />
    </div>
    <div className="col-6">
        <h6>Xavier International College</h6>
        <p className="lead">
            Library Management System
        </p>
    </div>
    </div>
    </a>
    <div>
        <h3>{name}</h3>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
