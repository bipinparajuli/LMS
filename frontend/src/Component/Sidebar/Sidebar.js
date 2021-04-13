import  React from 'react'
import {Menu,MenuItem,SidebarHeader,SidebarContent,SidebarFooter,ProSidebar} from "react-pro-sidebar"
import {NavLink} from 'react-router-dom'
import {FiMessageSquare} from 'react-icons/fi'
import {signout} from "../auth/index"
import Dashboard from '@material-ui/icons/Dashboard'
import GroupAdd from '@material-ui/icons/GroupAdd'
import LibraryBooks from '@material-ui/icons/LibraryBooks'
import LibraryAdd from '@material-ui/icons/LibraryAdd'
import Group from '@material-ui/icons/Group'
import Power from '@material-ui/icons/SettingsPower'

import './Sidebar.css'

const Sidebar = ({data,one,two,three,four,five,six,seven,header}) => {
// const data = ['/dashboard','All User','All Books','Add User','Add Book','Renew/Issue request',];
    return(
    <div className="sidebar_container">
        <ProSidebar>
<SidebarHeader>
    <h5>{one,two,three,four,five,six,seven,header}</h5>
</SidebarHeader>

<SidebarContent>
    <Menu>
        <MenuItem >
<Dashboard style={{marginRight:"15px"}} />
        <NavLink exact to={data[0]}>{one}</NavLink>
        </MenuItem>
        <MenuItem>
        <LibraryBooks style={{marginRight:"15px"}} />
        <NavLink exact to={data[1]}>{two}</NavLink>
        </MenuItem>
        <MenuItem>
        <Group style={{marginRight:"15px"}} />
        <NavLink exact to={data[2]}>{three}</NavLink>
        </MenuItem>
        <MenuItem>
        <NavLink exact to={data[3]}>{four}</NavLink>
        </MenuItem>
        <MenuItem>
        <LibraryAdd style={{marginRight:"15px"}} />
        <NavLink exact to={data[4]}>{five}</NavLink>
        </MenuItem>
        <MenuItem>
        <GroupAdd style={{marginRight:"15px"}} />
        <NavLink to={data[5]} exact>{six}</NavLink>
        </MenuItem>
        <MenuItem>
        <Power style={{marginRight:"15px"}} />
        <NavLink exact to={data[6]} onClick={signout}>{seven}</NavLink>
        </MenuItem>
    </Menu>
</SidebarContent>
<SidebarFooter>
<p style={{fontSize:"18px"}} className="lead">copyright @libaray management system</p>
</SidebarFooter>
</ProSidebar>
    </div>
)

}

export default Sidebar