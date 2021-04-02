import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../UI/Navbar/Navbar'

const Layout = ({children}) => {

    return (
        <div className="container">
<Navbar name="Admin" />
            <div className="row">
<div className="col-2">
       <Sidebar />
       </div>
       <div className="col-10">
            {children}
        </div>
            </div>
        </div>
    )
}

export default Layout
