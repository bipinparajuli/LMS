import React,{useState,useEffect,Suspense} from 'react'
import { deleteBook, getAllBook, searchBookByName } from '../../APIHelper/bookapi';
import { isAuthenticate } from '../../auth';
import {Link} from "react-router-dom"
import { toast } from 'react-toastify';
import {useStateValue} from '../../../Container/Serviceprovider'
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

        deleteBook(user._id,book_id,token)
        .then(
               d=>
            {
            
                toast("Deleted",{type:"error"})
  preload()          
            }
            
            )
        .catch(e=>toast(e,{type:"error"}))
    }
    
    const preload =()=> {
    setloading(true)
        getAllBook().then(data=>{
            // console.log(data)
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

book == [] || undefined ? console.log("loading..") :

    book.map((d,i)=>{
        return (
            < >
           {/* <Suspense fallback={<h1>Loading profile...</h1>}> */}

            <tbody key={i}>
            <tr 
               data-aos={"flip-left"}
               data-aos-easing={"ease-out-cubic"}
               data-aos-duration={"2000"}
            >
                <td>{d._id}</td>
                <td>{d.bookname}</td>
          
                <td>{d.stocks}</td>
                <td>{d.createdAt}</td>
          
                <td>
                    {
                    loading?
                    (
                        <>
                    <button type="button" className="btn btn-danger mr-1 disabled" style={{marginRight:"10px"}} >
                        Delete
                    </button>
                    <Link  className="btn btn-primary disabled" >Update</Link>
                    </>
                    )
:
(
    <>
<button type="button" className="btn btn-danger mr-1" style={{marginRight:"10px"}} onClick={()=>deleteHandler(d._id)}>
    Delete
</button>

<Link  className="btn btn-primary" to={`admin/book/updatebook/${d._id}`}>
    Update
</Link>
    </>
)

                    }
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
