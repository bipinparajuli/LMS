import React,{useState} from 'react'
import { addStudent } from '../../APIHelper/auth'
import {addBook} from '../../APIHelper/bookapi'
import { isAuthenticate } from '../../auth'
import Layout from '../../Layout/Layout'

const AddUser = () => {

  const {user,token} = isAuthenticate()
  const [values, setvalues] = useState({
    name:"",
    email:"",
    phone:"",
    roll:"",
    address:"",
    department:"",
    // formData:""
  })

  const {name,email,phone,roll,address,department} = values;

  const onsubmit = e =>{
e.preventDefault();
console.log(values)
addStudent(user._id,token,{name,email,phone,roll,address,department})
.then(d=>console.log(d))
.catch(e=>console.log(e))

  }


  const handleChange = name => event=> {
const value = event.target.value;
// console.log(value,name)
// formData.set(name,value)
setvalues({...values,[name]:value})
}
  return (
<Layout>
<div>
            <form class="row g-3">
  <div class="col-md-6">
    <label  class="form-label">Student Name</label>
    <input type="text" class="form-control" onChange={e=>setvalues({...values,name:e.target.value})}  />
  </div>
  <div class="col-md-6">
    <label  class="form-label">Email</label>
    <input type="text" class="form-control" onChange={e=>setvalues({...values,email:e.target.value})}  />
  </div>

  <div class="col-md-6">
    <label  class="form-label">Address</label>
    <input type="text" class="form-control" onChange={e=>setvalues({...values,address:e.target.value})} />
  </div>

  <div class="col-md-6">
    <label  class="form-label">Phone No.</label>
    <input type="text" class="form-control" onChange={e=>setvalues({...values,phone:e.target.value})} />
  </div>
  <div class="col-md-6">
    <label  class="form-label">Roll no.</label>
    <input type="text" class="form-control" onChange={e=>setvalues({...values,roll:e.target.value})} />
  </div>
  <div class="col-md-4">
    <label  class="form-label">Department</label>
    <select id="inputState" class="form-select" onChange={e=>setvalues({...values,department:e.target.value})}>
      <option value="BCA">BCA</option>
      <option value="BBM">BBM</option>
      <option value="BBS">BBS</option>
      <option value="BSW">BSW</option>
    </select>
  </div>

  <div class="col-12">
    <button  class="btn btn-success" onClick={onsubmit} >Add User</button>
  </div>
</form>
        </div>
        </Layout>
    )
}

export default AddUser
