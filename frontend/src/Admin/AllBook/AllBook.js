import React,{useState,useEffect} from 'react'
import { getAllBook } from '../../APIHelper/bookapi'
import Layout from '../../Layout/Layout'
import Search from '../../UI/Search/Search'
import Table from '../../UI/Table/Table'

const AllBook = () => {

    
const bookNotAvailable = () => {
    return(
        <div>
<h3>No Book is present in Database</h3>
            </div>
    )
}
const bookAvailable  = () => {
return (
    <Layout>
    <div>
    <Search placeholder="Search Books" />
           
<Table firsthead="Book ID" secondhead="Book Name" thirdhead="Stocks" fourthead="Created at"  />
</div>
</Layout>
)
}

    return (
        <div>

{bookAvailable()}

        </div>
    )
}

export default AllBook
