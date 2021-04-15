import React,{useState,useEffect} from 'react'
import Layout from '../../Layout/Layout'
import {Link,Redirect} from 'react-router-dom'
import {ArrowBackSharp} from '@material-ui/icons'
import { getDepartment,updateDepartment } from '../../APIHelper/departmentHelper'
import { isAuthenticate } from '../../auth'
import {toast} from 'react-toastify'
import ClipLoader from "react-spinners/ClipLoader";
import {ArrowRightAlt} from '@material-ui/icons'

const {user,token} = isAuthenticate()

const UpdateDepartment = ({match}) => {

const [values, setvalues] = useState({name:""})
const [adding, setadding] = useState(false)

const {name} = values

const prealod = (departmentId) => {

    getDepartment(user._id,token,departmentId)
.then(data=>{

    setvalues({...values,name:data.name})
})
.catch(err => {
    console.log(err)})

}

const onsubmit =(e)=> {

    e.preventDefault()


    setadding(true)

updateDepartment(user._id,token,match.params.departmentid,{name})
.then(data=>{
    if(!data)
    {
    toast("Failed to update",{type:"error"})
setadding(false)
    }
    else{
        toast("Successfully Updated",{type:"success"})
        setadding(false)
    }
    

})
.catch(err=>{
    toast("Failed to update",{type:"error"})
})

}

    useEffect(()=>{
prealod(match.params.departmentid)
    },[])
    return (
        <div>
<Layout>
<Link style={{position:"absolute",left:"250px"}} to="/department"><ArrowBackSharp/></Link>

<h1>
                Update Department
            </h1>
<form className="row g-3">
  <div className="col-md-4">
      </div>

  <div style={{marginTop:"10%"}} className="col-md-4">
    <input required type="text" value={name} placeholder="Department name" style={{borderLeft:"hidden",borderRight:"hidden",borderTop:'hidden'}} className="form-control" onChange={e=>setvalues({...values,name:e.target.value})}  />
    <div style={{marginTop:"20px"}} className="col-12">
{

adding ? 
<button  className="btn btn-success"  >
                <ClipLoader color={"#8D3DAF"} loading={adding}  size={50} /> 
</button> 
        :
 <button  class="btn btn-success" onClick={onsubmit} >

     Update Department <ArrowRightAlt/>
    </button>
}    
  </div>
  </div>
  <div className="col-md-4">
      </div>
  </form>
</Layout>
    
        </div>
    )
}

export default UpdateDepartment
