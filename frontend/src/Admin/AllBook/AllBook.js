import React,{useEffect} from 'react'
import { getAllBook } from '../../APIHelper/bookapi'
import Search from '../../UI/Search/Search'
import Table from '../../UI/Table/Table'

const AllBook = () => {

    useEffect(() => {
        getAllBook().then(data=>{
            if(data)
            {
                console.log(data)
            }
            else console.log(data)
        })
    }, [])

    return (
        <div>
<Search placeholder="Search Books" />            
<Table firsthead="Book ID" secondhead="Book Name" thirdhead="Stocks" />

        </div>
    )
}

export default AllBook
