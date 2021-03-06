import React from 'react'
import Sidebar from '../Sidebar/Sidebar'


const Layout = ({children}) => {

    return (
        <div className="container">
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
