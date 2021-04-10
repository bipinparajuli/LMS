import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify'
import { useStateValue } from '../../../Container/Serviceprovider'
import { deleteStudent, getallusers } from '../../APIHelper/auth'
import { isAuthenticate } from '../../auth'
import Layout from '../../Layout/Layout'
import Search from '../../UI/Search/Search'
// import Table from '../../UI/Table/Table'


const {user,token} = isAuthenticate();

function AllUser() {
    const [value, setvalue] = useState([{_id:"please wait...",name:"please wait...",address:"please wait...",phone:"please wait..."}])

    const [{searchStudent},dispatch] = useStateValue();
    
    const deleteHandler = (sid) => {
console.log(sid)
        deleteStudent(user._id,sid,token)
.then(d=>
    { 
    
    toast("Deleted Successfuly",{type:"error"})
        preload()
}

)
.catch(e=>toast(e,{type:"error"}))

    }

const preload = ()=> {
// console.log("inital load")
    getallusers().then(data =>
        {
            if(data)
            {
                setvalue(data)

            }
            else{
                return (
                    <h1>No user Found</h1>
                )
            }

        }
            )
.catch(e=>console.log(e))
}


    useEffect(() => {
        preload()
    }, [])


    useEffect(() => {
        setvalue(searchStudent)
    }, [searchStudent])
    return (
        <Layout>
        <div>
<Search placeholder="Search Users" />
<table className="table table-dark table-hover">
<thead>
            <tr>
                <th>User id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone No.</th>
                <th></th>
          
                </tr>
            </thead>
{
    console.log(value),value.map((d,i)=>{
        // console.log(d)
        return (
            <>
           
            <tbody key={i + 1}>
            <tr>
                <td>{d._id}</td>
                <td>{d.name}</td>
          
                <td>{d.address}</td>
                <td>{d.phone}</td>
          
                <td><button type="button" className="btn btn-danger mr-1" onClick={()=>deleteHandler(d._id)}>Delete</button><Link className="btn btn-primary" to={`admin/student/updatestudent/${d._id}`}>Update</Link></td>
          
            </tr>
            </tbody>
</>
        )
    })
}

</table>
        </div>
</Layout>
    )
}

export default AllUser
