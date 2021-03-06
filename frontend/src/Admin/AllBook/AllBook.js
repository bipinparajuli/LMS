import React from 'react'
import Search from '../../UI/Search/Search'
import Table from '../../UI/Table/Table'

const AllBook = () => {
    return (
        <div>
<Search placeholder="Search Books" />            
<Table firsthead="Book ID" secondhead="Book Name" thirdhead="Stocks" />

        </div>
    )
}

export default AllBook
