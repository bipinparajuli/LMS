import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../UI/Navbar/Navbar'

const StudentHome = ({children}) => {
    const data =["/student","/allbooks","/mybooklist","/issuebook","/addbook","/updatestudentprofile","/"]

    return (
        <div className="container-fluid">
<Navbar name="Student Home" />
            <div className="row">
<div className="col-2">
       <Sidebar data={data} one="My Profile" two="All available book" three="My Book list"   six="Update Profile" seven="Log Out" header="Student Home" />
       </div>
       <div className="col-10">
            {children}
        </div>
            </div>
        </div>
    )
}

export default StudentHome
