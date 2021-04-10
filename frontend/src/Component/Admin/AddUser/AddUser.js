import React,{useState} from 'react'
import { addStudent } from '../../APIHelper/auth'
// import {addBook} from '../../APIHelper/bookapi'
import { isAuthenticate } from '../../auth'
import Layout from '../../Layout/Layout'
import {toast} from 'react-toastify'
const AddUser = () => {

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


//   const handleChange = name => event=> {
// const value = event.target.value;
// // console.log(value,name)
// // formData.set(name,value)
// setvalues({...values,[name]:value})
// }
  return (
<Layout>
<div>
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
      <option value="BCA">BCA</option>
      <option value="BBM">BBM</option>
      <option value="BBS">BBS</option>
      <option value="BSW">BSW</option>
    </select>
  </div>

  <div className="col-12">
{adding ? <button  className="btn btn-secondary"  >Adding User</button> : <button  class="btn btn-success" onClick={onsubmit} >Add User</button>}    
  </div>
</form>
        </div>
        </Layout>
    )
}

export default AddUser
