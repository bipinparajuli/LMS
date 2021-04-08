import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../UI/Navbar/Navbar'

const Layout = ({children}) => {
const data =['/dashboard',"/allbook","/alluser","/issuebook","/addbook","/adduser","/"]
    return (
        <div className="container">
<Navbar name="Admin" />
            <div className="row">
<div className="col-2">
       <Sidebar 
data={data}
one="Dashboard" two="All Books" three="All users" four="Issue/Return Request" five="Add Book" six="Add user" seven="Log out"  />
       </div>
       <div className="col-10">
            {children}
        </div>
            </div>
        </div>
    )
}

export default Layout
