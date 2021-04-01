import React,{useState,useEffect,Suspense} from 'react'
import { deleteBook, getAllBook } from '../../APIHelper/bookapi';
import { isAuthenticate } from '../../auth';
import {Link} from "react-router-dom"
import { toast } from 'react-toastify';

const Table = ({firsthead,secondhead,thirdhead,fourthead,data}) => {
    const [book, setbook] = useState([]);


    const {user,token} = isAuthenticate();

    const deleteHandler = (book_id) => {

        deleteBook(user._id,book_id,token)
        .then(
               d=>
            {
            
                toast("Deleted",{type:"success"})
  preload()          
            }
            
            )
        .catch(e=>toast(e,{type:"error"}))
    }
    
    const preload =()=> {
        getAllBook().then(data=>{
            if(data)
            {
                setbook(data)
                console.log(data)
            }
            else console.log(data)
        })
    }
    
    useEffect(() => {
preload()        
    }, [])


    return (
        <>
           
           
{
    book.map((d,i)=>{
        return (
            <>
           <Suspense fallback={<h1>Loading profile...</h1>}>

            <tbody key={i}>
            <tr>
                <td>{d._id}</td>
                <td>{d.bookname}</td>
          
                <td>{d.stocks}</td>
                <td>{d.createdAt}</td>
          
                <td><button type="button" class="btn btn-danger mr-1" onClick={()=>deleteHandler(d._id)}>Delete</button><Link className="btn btn-primary" to={`admin/book/updatebook/${d._id}`}>Update</Link></td>
          
            </tr>
            </tbody>

            </Suspense>

</>
        )
    })
}

        </>
    )
}

export default Table
