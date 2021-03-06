import  React from 'react'
import {Menu,MenuItem,SidebarHeader,SidebarContent,SidebarFooter,ProSidebar} from "react-pro-sidebar"
import {NavLink} from 'react-router-dom'
import {} from 'react-icons'



const Sidebar = () => {
const data = ['Dashboard','All User','All Books','Add User','Add Book','Renew/Issue request',];
    return(
    <div>
        <ProSidebar>
<SidebarHeader>
    <h5>Admin Dashboard</h5>
</SidebarHeader>

<SidebarContent>
    <Menu>
        <MenuItem>
        <NavLink exact to="/">Dashboard</NavLink>
        </MenuItem>
        <MenuItem>
        <NavLink exact to="allbook">All Book</NavLink>
        </MenuItem>
        <MenuItem>
        <NavLink exact to="alluser">All User</NavLink>
        </MenuItem>
        <MenuItem>
        <NavLink exact to="issuebook">Issue/Renew Book</NavLink>
        </MenuItem>
        <MenuItem>
        <NavLink exact to='addbook'>Add Book</NavLink>
        </MenuItem>
        <MenuItem>
        <NavLink to='adduser' exact>Add User</NavLink>
        </MenuItem>
        <MenuItem>
        <NavLink exact to='addbook'>Log Out</NavLink>
        </MenuItem>
    </Menu>
</SidebarContent>
<SidebarFooter>
<p className="lead">copyright @libaray management system</p>
</SidebarFooter>
</ProSidebar>
    </div>
)

}

export default Sidebar