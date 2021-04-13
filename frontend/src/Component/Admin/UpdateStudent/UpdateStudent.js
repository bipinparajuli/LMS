import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify'
import { getStudentById, updateStudent } from '../../APIHelper/Studentapi'
import { isAuthenticate } from '../../auth/index'
import Layout from '../../Layout/Layout'
import Arrow from '../../UI/Icons/Arrows'
// import Arrow from '@material-ui/icons/ArrowRightAlt'

const {user,token} = isAuthenticate()


const UpdateBook = ({labelone,labeltwo,labelthree,labelfour,labelfive,labelsix,labelseven,match}) => {
    const [values, setvalues] = useState({
        name:"",
        email:"",
        contact:"",
        roll:"",
        address:"",
        department:"",
    })
    const {name,email,contact,roll,address,department} = values;


    const preload = (studentid) =>{
      getStudentById(studentid).then(data=>{

        // console.log(data)

        if(data.error)
{
    // console.log("ERROR")
}
    setvalues({
        ...values,
        name:data.name,
        email:data.email,
        address:data.address,
        contact:data.phone,
        department:data.department,
        roll:data.roll
    })
}).catch()
    }

//SUBMITING THE UPDATED TO BACKEND
    const onsubmit = (e) => {
e.preventDefault()

console.log("Updating . . .")
      updateStudent(user._id,match.params.studentid,token,{name,email,contact,roll,address,department})
      .then(data=>
        {
if(data.error)
{
  toast(data.error,{type:"error"})
}
toast("Updated Successfully",{type:"success"})

        }
        
        )
      .catch(e=>  toast(e,{type:"error"})
      )

    }

    //GETTING PRODUCT
    useEffect(() => {

        preload(match.params.studentid)
    }, [])

    return (
      <Layout>
        <div>
               <form className="row g-3">
  <div className="col-md-6">
    <label  className="form-label">Student Name</label>
    <input type="text" value={name} className="form-control" onChange={e=>setvalues({...values,name:e.target.value})}  />
  </div>

  <div className="col-md-6">
    <label  className="form-label">Email</label>
    <input type="text" className="form-control" value={email} onChange={e=>setvalues({...values,email:e.target.value})} />
  </div>

  <div className="col-md-6">
    <label  className="form-label">Phone</label>
    <input type="text" className="form-control" value={contact} onChange={e=>setvalues({...values,contact:e.target.value})} />
  </div>
  <div className="col-md-6">
    <label  className="form-label">Address</label>
    <input type="text" className="form-control" value={address} onChange={e=>setvalues({...values,address:e.target.value})} />
  </div>
  <div className="col-md-6">
    <label  className="form-label">Roll</label>
    <input type="text" className="form-control" value={roll} onChange={e=>setvalues({...values,roll:e.target.value})} />
  </div>
  <div className="col-md-4">
    <label  className="form-label">{labelthree}</label>
    <select id="inputState" className="form-select" onChange={e=>setvalues({...values,department:e.target.value})}>
      <option value="BCA">BCA</option>
      <option value="BBM">BBM</option>
      <option value="BBS">BBS</option>
      <option value="BSW">BSW</option>
    </select>
  </div>

  <div className="col-12">
    <button  className="btn btn-success" onClick={onsubmit} >Update Student <Arrow/></button>
  {/* <Link to="/dashboard" className="" style={{marginLeft:"10px"}}>Go Back</Link> */}
  <Link className="btn btn-primary" href="/dashboard" role="button" style={{marginLeft:"10px"}}>Go Back</Link>
  </div>
</form>

        </div>
        </Layout>
    )
}

export default UpdateBook
