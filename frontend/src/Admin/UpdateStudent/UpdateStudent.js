import React,{useState,useEffect} from 'react'
import { getBookById, updateBook } from '../../APIHelper/bookapi'
import { isAuthenticate } from '../../auth/index'
import Layout from '../../Layout/Layout'


const {user,token} = isAuthenticate()


const UpdateBook = ({labelone,labeltwo,labelthree,labelfour,labelfive,labelsix,labelseven,match}) => {
    const [values, setvalues] = useState({
        name:"",
        email:"",
        phone:"",
        roll:"",
        address:"",
        department:"",
    })
    const {name,email,phone,roll,address,department} = values;


    const preload = (bookid) =>{
        console.log(bookid)
getBookById(bookid).then(data=>{
if(data.error)
{
    console.log("ERROR")
}
    setvalues({
        ...values,
        name:data.name,
        email:data.email,
        address:data.address,
        contact:data.contact,
        department:data.department,
        roll:data.roll
    })
}).catch()
    }

//SUBMITING THE UPDATED TO BACKEND
    const onsubmit = (e) => {
e.preventDefault()

console.log("Updating . . .")
      updateBook(user._id,match.params.bookid,token,{name,email,phone,roll,address,department})
      .then(data=>console.log(data))
      .catch(e=> console.log(e))

    }

    //GETTING PRODUCT
    useEffect(() => {

        preload(match.params.bookid)
    }, [])

    return (
      <Layout>
        <div>
               <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Student Name</label>
    <input type="text" value={name} class="form-control" onChange={e=>setvalues({...values,name:e.target.value})}  />
  </div>

  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="text" class="form-control" value={email} onChange={e=>setvalues({...values,email:e.target.value})} />
  </div>

  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Phone</label>
    <input type="text" class="form-control" value={phone} onChange={e=>setvalues({...values,phone:e.target.value})} />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Address</label>
    <input type="text" class="form-control" value={address} onChange={e=>setvalues({...values,address:e.target.value})} />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Roll</label>
    <input type="text" class="form-control" value={roll} onChange={e=>setvalues({...values,roll:e.target.value})} />
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">{labelthree}</label>
    <select id="inputState" class="form-select" onChange={e=>setvalues({...values,department:e.target.value})}>
      <option value="BCA">BCA</option>
      <option value="BBM">BBM</option>
      <option value="BBS">BBS</option>
      <option value="BSW">BSW</option>
    </select>
  </div>

  <div class="col-12">
    <button  class="btn btn-success" onClick={onsubmit} >Update Student</button>
  </div>
</form>

        </div>
        </Layout>
    )
}

export default UpdateBook
