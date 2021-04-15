import React,{useEffect,useState} from 'react'
import { isAuthenticate } from '../auth'
import StudentHome from './StudentHome'
import {getStudentBookList} from '../APIHelper/orderHelper'


const {user,token} = isAuthenticate();

const Mybooks = () => {
const [state, setstate] = useState([{bookname:"Please wait...",publication:"Please wait...",authorname:"Please wait...",}])

const preload = () => {
    getStudentBookList(user._id,token)
    .then(data=>{
        setstate(data)
    })
.catch(err=>console.log(err))
}


useEffect(() => {
    preload()
}, [Mybooks])
    return (
        <div>
<StudentHome>
<h1>My all books are here !</h1>    
<table className="table table-border table-hover">
<thead>
            <tr>
                <th>Book Name</th>
                <th>Publication</th>
                <th>Author</th>
                <th>Status</th>
          
            </tr>
</thead>
{
    state.length == 0 ?(
        <p className="lead" style={{color:"black"}}>Your booklist is empty please order</p>
    )

:
    state.map((d,i)=>{
            return (
                < >
    
                <tbody key={i}>
                <tr>
                    <td>{d.bookname}</td>
                    <td>{d.publication}</td>              
                    <td>{d.authorname}</td>
                    <td><span className="badge rounded-pill bg-info text-dark">{d.status}</span></td>

                </tr>
                </tbody>
    </>
            )
    })
}

</table>
</StudentHome>            
        </div>
    )
}

export default Mybooks
