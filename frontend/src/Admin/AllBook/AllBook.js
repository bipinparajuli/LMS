import React,{Suspense,lazy} from 'react'
import { getAllBook } from '../../APIHelper/bookapi'
import Layout from '../../Layout/Layout'
import Search from '../../UI/Search/Search'
const Table = lazy(() => import('../../UI/Table/Table'))

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
<Suspense fallback={<h1>Book list ...</h1>}>
<Layout>
    <div>
    <Search placeholder="Search Books" />
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
