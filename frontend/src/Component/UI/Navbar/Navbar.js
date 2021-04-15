import React from 'react'
import {FaBookOpen} from 'react-icons/fa'
import ClipLoader from "react-spinners/ClipLoader";
import { useStateValue } from '../../../Container/Serviceprovider';
import './Navbar.css'


const Navbar = ({name}) => {
const [{deleting}]=useStateValue()
console.log(deleting)
const date = new Date();
    return (
        <div className="container-fluid nav_main" >
            <nav  className="navbar fixed-top navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">
    <div className="row">
    <div style={{marginRight:"1%"}} className="col-6">
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
<span>
<ClipLoader color={"red"} loading={deleting}  size={50} /> 
</span>
        <h3>{name}</h3>
        <p className="leap"> Date: {date.toDateString()}</p>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
