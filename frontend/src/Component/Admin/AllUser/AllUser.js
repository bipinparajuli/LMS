import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify'
import { useStateValue } from '../../../Container/Serviceprovider'
import { deleteStudent, getallusers } from '../../APIHelper/auth'
import { isAuthenticate } from '../../auth'
import Layout from '../../Layout/Layout'
import Search from '../../UI/Search/Search'
// import Modal from '@material-ui/core/Modal';
// import Table from '../../UI/Table/Table'


const {user,token} = isAuthenticate();

function AllUser() {
    const [value, setvalue] = useState([{_id:"please wait...",name:"please wait...",address:"please wait...",phone:"please wait..."}])
const [loading, setloading] = useState(false)
// const [deleting, setdeleting] = useState(false)

    const [{searchStudent,},dispatch] = useStateValue();
    
    const deleteHandler = (sid) => {
dispatch({
    type:"DELETING",
    item:true
})
        deleteStudent(user._id,sid,token)
.then(d=>
    { 
        console.log(d)    
    toast("Deleted Successfuly",{type:"error"})
        preload()
        dispatch({
            type:"DELETING",
            item:false
        })
}

)
.catch(e=>toast(e,{type:"error"}))

    }

const preload = ()=> {
    setloading(true)
// console.log("inital load")
    getallusers().then((data) =>
        {

            if(data.error)
            {
                return toast("failed to get data",{type:"warning"})
            }

            if(data)
            {
                setvalue(data)
setloading(false)
dispatch({
    type:"TOTALUSER",
    item:data.length
})
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
    }, [])
    useEffect(() => {
        setvalue(searchStudent)
    }, [searchStudent])
    return (
        <Layout>
        <div>
<Search placeholder="Search Users" />
<div className="table-responsive">
<table className="table table table-bordered" style={{marginTop:"20px"}}>
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
   loading ==false ? value.map((d,i)=>{
        // console.log(d)
        return (
            <>
           
            <tbody key={i + 1}>
            <tr>
            
                <td>{d._id}</td>
                <td>{d.name}</td>
          
                <td>{d.address}</td>
                <td>{d.phone}</td>
          
                <td><button type="button" className="btn btn-danger mr-1" style={{marginRight:"10px"}} onClick={()=>deleteHandler(d._id)}>Delete</button><Link className="btn btn-primary" to={`admin/student/updatestudent/${d._id}`}>Update</Link></td>
          
            </tr>
            </tbody>
</>
        )
    }):
    (
        <tbody>
        <tr>
            <td>loading . . . </td>
            <td>loading . . .</td> 
            <td>loading . . .</td>
            <td>loading . . .</td>
      
            <td><button type="button" className="btn btn-danger mr-1 disabled" style={{marginRight:"10px"}} >Delete</button><Link className="btn btn-primary disabled" >Update</Link></td>
      
        </tr>
        </tbody>
    )
}

</table>
</div>
        </div>
</Layout>
    )
}

export default AllUser
