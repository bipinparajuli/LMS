import React,{useState} from 'react'
import Layout from '../../Layout/Layout'
import {Link} from 'react-router-dom'
import {ArrowBackSharp} from '@material-ui/icons'
import { createDepartment } from '../../APIHelper/departmentHelper'
import { isAuthenticate } from '../../auth'
import {toast} from 'react-toastify'
import ClipLoader from "react-spinners/ClipLoader";
import {ArrowRightAlt} from '@material-ui/icons'

const {user,token} = isAuthenticate()

const AddDepartment = () => {

const [values, setvalues] = useState({name:""})
const [adding, setadding] = useState(false)

const {name} = values


const onsubmit =(e)=> {

    e.preventDefault()


    setadding(true)

createDepartment(user._id,token,{name})
.then(data=>{
    console.log(data)
    if(!data)
    {
    toast("Failed to add",{type:"error"})
setadding(false)
    }
    else{
        toast("Successfully added",{type:"success"})
        setadding(false)
    }
    

})
.catch(err=>{
    toast("Failed to add",{type:"error"})
})

}

    return (
        <div>
<Layout>
<Link style={{position:"absolute",left:"250px"}} to="/department"><ArrowBackSharp/></Link>

<h1>
                Add Department
            </h1>
<form className="row g-3">
  <div className="col-md-4">
      </div>

  <div style={{marginTop:"10%"}} className="col-md-4">
    <input required type="text"  placeholder="Department name" style={{borderLeft:"hidden",borderRight:"hidden",borderTop:'hidden'}} className="form-control" onChange={e=>setvalues({...values,name:e.target.value})}  />
    <div style={{marginTop:"20px"}} className="col-12">
{

adding ? 
<button style={{boxShadow:"3px 3px 4px 3px #ccc",background:"#8D3DAF"}}  className="btn btn-success"  >
                <ClipLoader color={"white"} loading={adding}  size={50} /> 
</button> 
        :
 <button  class="btn btn-success" style={{boxShadow:"3px 3px 4px 3px #ccc",background:"#8D3DAF"}} onClick={onsubmit} >

     Add Department <ArrowRightAlt/>
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

export default AddDepartment
