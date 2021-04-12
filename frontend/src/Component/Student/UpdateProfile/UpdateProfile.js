import React,{useState,useEffect} from 'react'
import { getStudentById, updateStudent } from '../../APIHelper/Studentapi';
import { isAuthenticate } from '../../auth';
import StudentHome from '../StudentHome';

const {user,token} = isAuthenticate();

const UpdateProfile = () => {

    const [updating, setupdating] = useState(false)
    const [state, setstate] = useState({
        name:"",
        email:"",
        roll_no:"",
        enc_password:'',
        phone:"",
        address:""

    })
const {name,email,roll_no,enc_password,phone,address} = state; 

const onsubmit = (e) => {
e.preventDefault();
setupdating(true)

updateStudent(user._id,token,{name,email,enc_password,roll_no,address,phone})
.then(data=> {
    setupdating(false)
})
.catch(err=>console.log(err))

}



const preload = async () => {

   await getStudentById(user._id)
    .then(data=>
        {
console.log(data)
            setstate(data)

        })
    .catch(e=> console.log(e))
    }

useEffect(()=>{
preload()
},[])
 
    return (
        <>
<StudentHome>

                         <form className="row g-3">
  <div className="col-md-6">
    <label  className="form-label">Your Name</label>
    <input type="text" value={name} className="form-control" onChange={e=>setstate({...state,name:e.target.value})}  />
  </div>

  <div className="col-md-6">
    <label  className="form-label">Email</label>
    <input type="text" className="form-control" value={email} onChange={e=>setstate({...state,email:e.target.value})} />
  </div>

  <div className="col-md-6">
    <label  className="form-label">Roll No.</label>
    <input type="text" className="form-control" value={roll_no} onChange={e=>setstate({...state,roll_no:e.target.value})} />
  </div>
  <div className="col-md-6">
    <label  className="form-label">Password</label>
    <input type="password" className="form-control" value={enc_password} onChange={e=>setstate({...state,enc_password:e.target.value})} />
  </div>

  <div className="col-md-6">
    <label  className="form-label">Phone</label>
    <input type="text" className="form-control" value={phone} onChange={e=>setstate({...state,phone:e.target.value})} />
  </div>
  
  <div className="col-md-6">
    <label  className="form-label">Address</label>
    <input type="text" className="form-control" value={address} onChange={e=>setstate({...state,address:e.target.value})} />
  </div>
{/* 
  <div className="col-md-4">
    <label  className="form-label">Department</label>
    <select id="inputState" className="form-select" onChange={e=>setstate({...state,department:e.target.value})}>
      <option value="BCA">BCA</option>
      <option value="BBM">BBM</option>
      <option value="BBS">BBS</option>
      <option value="BSW">BSW</option>
    </select>
  </div> */}

  <div className="col-12">
{updating? <button  className="btn btn-secondary"  >Updating Profile</button> : <button  className="btn btn-success" onClick={onsubmit} >Update Profile</button>}
{/* <a className="btn btn-primary" href="/dashboard" role="button" style={{marginLeft:"10px"}}>Go Back</a> */}

  </div>
</form>  

</StudentHome>


        </>

    )
}

export default UpdateProfile
