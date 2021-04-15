import React,{useEffect,useState} from 'react'
import { useStateValue } from '../../Container/Serviceprovider'
import { getAllBook, searchBookByName } from '../APIHelper/bookapi'
import { createOrder } from '../APIHelper/orderHelper'
import { isAuthenticate } from '../auth'
import StudentHome from './StudentHome'
import {toast} from 'react-toastify'

const {user,token} = isAuthenticate();

const AllBooks = () => {

    const [{},dispatch] = useStateValue()

const [value, setvalue] = useState("Loading Please wait...")
const [book, setbook] = useState([{_id:"please wait...",bookname:"please wait...",stocks:"please wait...",createdAt:"please wait...",}]);
const [order,setorder] = useState(false);
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

const orderBook =(id)=> {
    setorder(true)
console.log(user)
    createOrder(user._id,token,{book:id,user:user._id})
    .then(data=>{
toast("Your Order has been placed successfully",{type:"success"})
setorder(false)
})
    .catch(err=>console.log(err))

}

useEffect(()=>{
preload()
},[])
    return (
        <>
<StudentHome>
<h1>All books are here</h1>
<nav className="navbar navbar-light">
  <div className="container-fluid">
<form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search book" onChange={e=>setvalue(e.target.value)} aria-label="Search" />
      <button className="btn btn-outline-success" onClick={Searchdata} type="submit">Search</button>
    </form>
</div>
</nav>

    <table style={{marginTop:"20px"}} className="table table-border table-hover">
<thead>
            <tr>
                <th>Book ID</th>
                <th>Book Name</th>
                <th>Stocks</th>
                <th></th>
          
            </tr>
</thead>
{
   book.length == 0 ?
    
   (
       <>
   <p className="lead" style={{color:"black"}}>No Books are available</p >
   </>
   )
 :  book.map((d,i)=>{
            return (
                < >
    
                <tbody key={i}>
                <tr>
                    <td>{d._id}</td>
                    <td>{d.bookname}</td>              
                    <td>{d.stocks}</td>
               
                    <td>
                        {
                            order ?
                            <button onClick={()=>orderBook(d._id)} className='btn btn-secondary disabled'>
                                Ordering
                            </button>                            
:
                            <button onClick={()=>orderBook(d._id)} className='btn btn-secondary'>
                                Order Now
                            </button>                          
                        }
                        </td>
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

