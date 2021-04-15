import React,{useState,useEffect} from 'react'
import { addStudent } from '../../APIHelper/auth'
// import {addBook} from '../../APIHelper/bookapi'
import { isAuthenticate } from '../../auth'
import Layout from '../../Layout/Layout'
import {toast} from 'react-toastify'
import ClipLoader from "react-spinners/ClipLoader";
import { useStateValue } from '../../../Container/Serviceprovider'
import { getAllDepartment } from '../../APIHelper/departmentHelper'



const AddUser = () => {

 const [{departments},dispatch] = useStateValue()
  const {user,token} = isAuthenticate()


  const [values, setvalues] = useState({
    name:"",
    email:"",
    phone:"",
    roll_no:"",
    address:"",
    department:"",
    adding:false
  })

  const {name,email,phone,roll_no,address,department,adding} = values;

  const onsubmit = e =>{

    e.preventDefault();

setvalues({...values,adding:true})

// console.log(user._id,token)

addStudent(user._id,token,{name,email,phone,roll_no,address,department})
.then(d=>
  {
    if(d.error)
    {
      console.log(d.error)
      toast("Failed to add user" + d.error,{type:"error"})
      setvalues({...values,adding:false})
      Array.from(document.querySelectorAll("input")).forEach(
        input => (input.value = "")
      )
    }
    else{
      setvalues({...values,name:" ",email:" ",phone:" ",roll:" ",address:" ",department:"",adding:false})
      toast("Successfully added user",{type:"success"})
      Array.from(document.querySelectorAll("input")).forEach(
        input => (input.value = "")
      )
    }


  }
  )
.catch(e=>      toast("Failed to add user",{type:"error"})
)

  }
  useEffect(()=>{
    getAllDepartment(user._id,token)
      .then(data=>{
         console.log(data)
          dispatch({
              type:"DEPARTMENT",
              item:data
          })
      })
      .catch(err=> console.log(err))  
  })
  return (
<Layout>
<div>
<h2>Add User</h2>

            <form className="row g-3">
  <div className="col-md-6">
    <label  className="form-label">Student Name*</label>
    <input required type="text" className="form-control" onChange={e=>setvalues({...values,name:e.target.value})}  />
  </div>
  <div className="col-md-6">
    <label  className="form-label">Email*</label>
    <input required type="text" className="form-control" onChange={e=>setvalues({...values,email:e.target.value})}  />
  </div>

  <div className="col-md-6">
    <label  className="form-label">Address*</label>
    <input required type="text" className="form-control" onChange={e=>setvalues({...values,address:e.target.value})} />
  </div>

  <div className="col-md-6">
    <label  className="form-label">Phone No.*</label>
    <input type="text" required className="form-control" onChange={e=>setvalues({...values,phone:e.target.value})} />
  </div>
  <div className="col-md-6">
    <label  className="form-label">Roll no.*</label>
    <input required type="text" className="form-control" onChange={e=>setvalues({...values,roll_no:e.target.value})} />
  </div>
  <div className="col-md-4">
    <label  className="form-label">Department</label>
    <select id="inputState" className="form-select" onChange={e=>setvalues({...values,department:e.target.value})}>
      {
        departments.map((data,i)=>{
          return (
            <option key={i} value={data.name}>{data.name}</option>

          )
        })
      }
      
    </select>
  </div>

  <div className="col-12">
{adding ? <button  className="btn btn-success"  ><ClipLoader color={"#8D3DAF"} loading={adding}  size={50} /> 
</button> : <button  class="btn btn-success" onClick={onsubmit} >Add User</button>}    
  </div>
</form>
        </div>
        </Layout>
    )
}

export default AddUser
