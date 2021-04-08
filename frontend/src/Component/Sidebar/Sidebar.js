import  React from 'react'
import {Menu,MenuItem,SidebarHeader,SidebarContent,SidebarFooter,ProSidebar} from "react-pro-sidebar"
import {NavLink} from 'react-router-dom'
import {} from 'react-icons'
import {signout} from "../auth/index"

const Sidebar = ({data,one,two,three,four,five,six,seven,header}) => {
// const data = ['/dashboard','All User','All Books','Add User','Add Book','Renew/Issue request',];
    return(
    <div>
        <ProSidebar>
<SidebarHeader>
    <h5>{one,two,three,four,five,six,seven,header}</h5>
</SidebarHeader>

<SidebarContent>
    <Menu>
        <MenuItem>
        <NavLink exact to={data[0]}>{one}</NavLink>
        </MenuItem>
        <MenuItem>
        <NavLink exact to={data[1]}>{two}</NavLink>
        </MenuItem>
        <MenuItem>
        <NavLink exact to={data[2]}>{three}</NavLink>
        </MenuItem>
        <MenuItem>
        <NavLink exact to={data[3]}>{four}</NavLink>
        </MenuItem>
        <MenuItem>
        <NavLink exact to={data[4]}>{five}</NavLink>
        </MenuItem>
        <MenuItem>
        <NavLink to={data[5]} exact>{six}</NavLink>
        </MenuItem>
        <MenuItem>
        <NavLink exact to={data[6]} onClick={signout}>{seven}</NavLink>
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