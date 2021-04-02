import React,{Suspense,lazy,useState} from 'react'
import { searchBookByName } from '../../APIHelper/bookapi'
// import { getAllBook } from '../../APIHelper/bookapi'
import Layout from '../../Layout/Layout'
import Search from '../../UI/Search/Search'
import {useStateValue} from '../../../Container/Serviceprovider'

const Table = lazy(() => import('../../UI/Table/Table'))




const AllBook = () => {
const [value, setvalue] = useState("")
const [{},dispatch] = useStateValue();
    
// const bookNotAvailable = () => {
//     return(
//         <div>
// <h3>No Book is present in Database</h3>
//             </div>
//     )
// }

const submit = (e)=> {
    console.log(value)
    e.preventDefault();
    dispatch({
        type:'SEARCH',
        item:{
           value:value
        }
    })
}



const bookAvailable  = () => {
return (
<Suspense fallback={<h1>Book list ...</h1>}>
<Layout>
    <div>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search book" onChange={e=>setvalue(e.target.value)} aria-label="Search" />
      <button class="btn btn-outline-success" onClick={submit} type="submit">Search</button>
    </form>
    <table class="table table-dark table-hover">
<thead>
            <tr>
                <th>Book ID</th>
                <th>Book Name</th>
                <th>Stocks</th>
                <th>Created at</th>
                <th></th>
          
                </tr>
            </thead>
            <Suspense fallback={<h1>Loading profile...</h1>}>


<Table   />
            </Suspense>
</table>
</div>
</Layout>
</Suspense>
)
}

    return (
        <div>

{bookAvailable()}

        </div>
    )
}

export default AllBook
