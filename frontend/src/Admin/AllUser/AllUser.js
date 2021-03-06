import React from 'react'
import Search from '../../UI/Search/Search'
import Table from '../../UI/Table/Table'


function AllUser() {
    return (
        <div>
<Search placeholder="Search Users" />
<Table  firsthead="User ID" secondhead="User Name" thirdhead="Email" />
        </div>
    )
}

export default AllUser
