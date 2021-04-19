import React,{useState,useEffect} from 'react'
import Layout from '../../Layout/Layout'
import {AddCircleOutline} from '@material-ui/icons'
import {Link} from 'react-router-dom'
import { isAuthenticate } from '../../auth'
import { deleteDepartment, getAllDepartment } from '../../APIHelper/departmentHelper'
import {toast} from 'react-toastify'
import { useStateValue } from '../../../Container/Serviceprovider'

const {user,token} = isAuthenticate()

const Department = () => {
    const [{},dispatch] = useStateValue();

    const [state, setstate] = useState([{name:"Loading . . ."}])

const deleteHandler =(id) => {
    dispatch({
        type:"DELETING",
        item:true
    })
    deleteDepartment(user._id,token,id).then(data=>{
toast("Successfully deleted",{type:"success"})
preload()
dispatch({
    type:"DELETING",
    item:false
})
}
)
.catch(err=>{
    toast("Failed to delete",{type:"error"})

})
}

    const preload = () => {
getAllDepartment(user._id,token).then(data=>{
console.log(data)
    setstate(data)
}).catch(err=>console.log(err))
    }

useEffect(()=>{
preload();

},[])
    return (
        <Layout>
           <span className='text-center lead'>Add Department </span>
           <Link style={{color:"#8D3DAF",}} to="department/addDepartment"><AddCircleOutline className="animate__animated animate__flash " style={{marginBottom:"20px",fontSize:"40px"}} /></Link>
        <div className="table-responsive">
            <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Department</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
      {
    state.map((data,i)=>(
<tr key={i}>
      <th scope="row">{i}</th>
      <td>{data.name}</td>
       <td>
           <button type="button" className="btn btn-danger mr-1" style={{marginRight:"10px"}} onClick={()=>deleteHandler(data._id)}>
               Delete
            </button>
        </td>

      <td>
      <Link className="btn btn-primary" to={`department/updatedepartment/${data._id}`}>
                Update
            </Link>
      </td>
    </tr>
    ))      
      }
    
  </tbody>
</table>
        </div>
        </Layout>
    )
}

export default Department
