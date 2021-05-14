import  React from 'react'
import {Menu,MenuItem,SidebarHeader,SidebarContent,SidebarFooter,ProSidebar} from "react-pro-sidebar"
import {NavLink} from 'react-router-dom'
import {signout} from "../../auth/index"
import Dashboard from '@material-ui/icons/Person'
import LibraryBooks from '@material-ui/icons/LibraryBooks'
import Group from '@material-ui/icons/MenuBook'
import Power from '@material-ui/icons/SettingsPower'
import Update from '@material-ui/icons/Update'

import './Sidebar.css'

const SidebarStudent = ({data,one,two,three,four,five,header}) => {
// const data = ['/dashboard','All User','All Books','Add User','Add Book','Renew/Issue request',];
    return(
    <div className="sidebar_container">
        <ProSidebar>
<SidebarHeader>
    <h5>{one,two,three,four,five,header}</h5>
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
        <Update style={{marginRight:"15px"}} />
        <NavLink exact to={data[3]}>{four}</NavLink>
        </MenuItem>
        {/* <MenuItem> */}
        
        {/* <MenuItem>
        <GroupAdd style={{marginRight:"15px"}} />
        <NavLink to={data[5]} exact>{six}</NavLink>
        </MenuItem>
        <MenuItem>
        <GroupAdd style={{marginRight:"15px"}} />
        <NavLink to={data[6]} exact>{seven}</NavLink>
        </MenuItem> */}
        <MenuItem>
        <Power style={{marginRight:"15px"}} />
        <NavLink exact to={data[4]} onClick={signout}>{five}</NavLink>
        </MenuItem>
    </Menu>
</SidebarContent>
<SidebarFooter>
{/* <p style={{fontSize:"18px"}} className="lead">copyright @libaray management system</p> */}
</SidebarFooter>
</ProSidebar>
    </div>
)

}

export default SidebarStudent