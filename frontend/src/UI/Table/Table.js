import React,{useState,useEffect} from 'react'
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
        <div>
<table class="table table-dark table-hover">
<thead>
            <tr>
                <th>{firsthead}</th>
                <th>{secondhead}</th>
                <th>{thirdhead}</th>
                <th>{fourthead}</th>
                <th></th>
          
                </tr>
            </thead>
{
    book.map((d,i)=>{
        return (
            <>
           
            <tbody key={i}>
            <tr>
                <td>{d._id}</td>
                <td>{d.bookname}</td>
          
                <td>{d.stocks}</td>
                <td>{d.createdAt}</td>
          
                <td><button type="button" class="btn btn-danger mr-1" onClick={()=>deleteHandler(d._id)}>Delete</button><Link className="btn btn-primary" to={`admin/book/updatebook/${d._id}`}>Update</Link></td>
          
            </tr>
            </tbody>
</>
        )
    })
}

</table>
        </div>
    )
}

export default Table
