import React,{useState,useEffect,Suspense} from 'react'
import { deleteBook, getAllBook, searchBookByName } from '../../APIHelper/bookapi';
import { isAuthenticate } from '../../auth';
import {Link} from "react-router-dom"
import { toast } from 'react-toastify';
import {useStateValue} from '../../../Container/Serviceprovider'

const Table = ({firsthead,secondhead,thirdhead,fourthead,data}) => {
    const [book, setbook] = useState([{_id:"please wait...",bookname:"please wait...",stocks:"please wait...",createdAt:"please wait...",}]);

const [{search},dispatch] = useStateValue()

console.log(search.value)

const Searchdata = () => {

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
            
                toast("Deleted",{type:"success"})
  preload()          
            }
            
            )
        .catch(e=>toast(e,{type:"error"}))
    }
    
    const preload =()=> {
        getAllBook().then(data=>{
            console.log(data)
            if(data)
            {
                setbook(data)
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
            <>
           <Suspense fallback={<h1>Loading profile...</h1>}>

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
