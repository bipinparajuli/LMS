import React from 'react'
import { deleteBook } from '../../APIHelper/bookapi';
import { isAuthenticate } from '../../auth';

const Table = ({firsthead,secondhead,thirdhead,fourthead,data}) => {
    const {user,token} = isAuthenticate();

    const deleteHandler = (book_id) => {

        deleteBook(user._id,book_id,token).then(d=>console.log("Deleted")).catch(e=>console.log(e))
    }

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
    data.map((d,i)=>{
        return (
            <>
           
            <tbody key={i}>
            <tr>
                <td>{d._id}</td>
                <td>{d.bookname}</td>
          
                <td>{d.stocks}</td>
                <td>{d.createdAt}</td>
          
                <td><button type="button" class="btn btn-danger mr-1" onClick={()=>deleteHandler(d._id)}>Delete</button><button type="button" class="btn btn-primary">Edit</button></td>
          
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
