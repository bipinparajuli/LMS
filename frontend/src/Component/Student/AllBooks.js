import React,{useEffect,useState} from 'react'
import { useStateValue } from '../../Container/Serviceprovider'
import { getAllBook, searchBookByName } from '../APIHelper/bookapi'
import StudentHome from './StudentHome'

const AllBooks = () => {

    const [{},dispatch] = useStateValue()

const [value, setvalue] = useState("Loading Please wait...")
const [book, setbook] = useState([{_id:"please wait...",bookname:"please wait...",stocks:"please wait...",createdAt:"please wait...",}]);

const preload = () =>{
    getAllBook()
    .then(data=> {
        setbook(data)
    })
    .catch()
}

const Searchdata = (e) => {

    if(value !== undefined)
    {
        e.preventDefault()
        searchBookByName(value)
        .then(data =>    
            {
                console.log(data)
                             setbook(data)

            }
        )
        .catch(e=> console.log(e))
    }
    
} 

const orderBook =()=> {

}

useEffect(()=>{
preload()
},[])
    return (
        <>
<StudentHome>
<h1>All books are here</h1>
<form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search book" onChange={e=>setvalue(e.target.value)} aria-label="Search" />
      <button className="btn btn-outline-success" onClick={Searchdata} type="submit">Search</button>
    </form>
    <table className="table table-dark table-hover">
<thead>
            <tr>
                <th>Book ID</th>
                <th>Book Name</th>
                <th>Stocks</th>
                <th></th>
          
            </tr>
</thead>
{
    book.map((d,i)=>{
            return (
                < >
    
                <tbody key={i}>
                <tr>
                    <td>{d._id}</td>
                    <td>{d.bookname}</td>              
                    <td>{d.stocks}</td>
                    <td><button onClick={orderBook} className='btn btn-secondary'>Order Now</button></td>                            
                </tr>
                </tbody>
    </>
            )
    })
}

</table>

</StudentHome>            
</>
    )
}

export default AllBooks

