import React,{useState,useEffect,Suspense} from 'react'
import { deleteBook, getAllBook, searchBookByName } from '../../APIHelper/bookapi';
import { isAuthenticate } from '../../auth';
import {Link} from "react-router-dom"
import { toast } from 'react-toastify';
import {useStateValue} from '../../../Container/Serviceprovider'
import ClipLoader from "react-spinners/ClipLoader";
import './Table.css'

const Table = () => {
    const [book, setbook] = useState([{_id:"please wait...",bookname:"please wait...",stocks:"please wait...",createdAt:"please wait...",}]);

    const [loading,setloading] = useState(false)

    const [{search},dispatch] = useStateValue()

// console.log(search.value)

const Searchdata = (e) => {
// e.preventDefault()
    if(search.value !== undefined)
    {
        searchBookByName(search.value)
        .then(data =>                 setbook(data)
        )
        .catch(e=> console.log(e))
    }
    
} 


    const {user,token} = isAuthenticate();

    const deleteHandler = (book_id) => {
dispatch({
    type:"DELETING",
    item:true
})
        deleteBook(user._id,book_id,token)
        .then(
               d=>
            {
            
                toast("Deleted",{type:"error"})
  preload()     
  dispatch({
    type:"DELETING",
    item:false
})     
            }
            
            )
        .catch(e=>toast(e,{type:"error"}))
    }
    
    const preload =()=> {
    setloading(true)
        getAllBook().then(data=>{
            console.log(data)
            if(data)
            {
                setbook(data)
                setloading(false)
            }
            else console.log(data)
        })
    }
    
    useEffect(() => {
preload()        
    }, [])

    useEffect(() => {
        Searchdata()        
            }, [search])
        

    return (
        <>
           
           
{

book.length == 0 || book == undefined ? (
    <h1>You have no books In database</h1>
) :

    book.map((d,i)=>{
        return (
            < >
           {/* <Suspense fallback={<h1>Loading profile...</h1>}> */}

            <tbody key={i}>
            <tr>
                <td>{d._id}</td>
                <td>{d.bookname}</td>
          
                <td>{d.stocks}</td>
                <td>{d.createdAt}</td>
          
                <td>
                    
<button type="button" className="btn btn-danger mr-1" style={{marginRight:"10px"}} onClick={()=>deleteHandler(d._id)}>
    Delete
</button>

<Link  className="btn btn-primary" to={`admin/book/updatebook/${d._id}`}>
    Update
</Link>

          </td>
            </tr>
            </tbody>

            {/* </Suspense> */}

</>
        )
    })
}

        </>
    )
}

export default Table
