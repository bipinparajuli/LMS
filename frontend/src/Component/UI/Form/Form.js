import React,{useState} from 'react'
import {addBook} from '../../APIHelper/bookapi'
import { isAuthenticate } from '../../auth'
import {toast} from 'react-toastify'

const Form = ({labelone,labeltwo,labelthree,labelfour,labelfive,labelsix,labelseven}) => {

  const {user,token} = isAuthenticate()
  const [values, setvalues] = useState({
    authorname:"",
    bookname:"",
    publication:"",
    stocks:"",
    department:"",
adding:false,
error:""
  })

  const {authorname,bookname,publication,stocks,department,adding,error} = values;

  const errorMessege = () => {
    return (
    <div className="row">
    <div className="col-md-6 offset-sm-3 text-left" style={{display: error ? "" : "none"}}>
    <div className="alert alert-danger" >
    {error}
    </div>
    </div>
    </div>
    )
    
    }


  const onsubmit = e =>{
e.preventDefault();
setvalues({...values,adding:true})
addBook(user._id,token,{bookname,publication,stocks,authorname,department})
.then(d=> 
  {
    if(d.error)
    {
      setvalues({...values,error:d.error})
      toast(`${d.error}`,{type:'error'})
  
    }
    toast("Book Added",{type:'success'})
    setvalues({...values,adding:false})
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    )
  }
)
  
.catch(e=>console.log(e))

  }


  const handleChange = name => event=> {
const value = event.target.value;
// console.log(value,name)
// formData.set(name,value)
setvalues({...values,[name]:value})
}
  return (
        <div>
          {errorMessege()}
            <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">{labelone}</label>
    <input type="text" class="form-control" onChange={e=>setvalues({...values,bookname:e.target.value})}  />
  </div>

  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">{labelfour}</label>
    <input type="text" class="form-control" onChange={e=>setvalues({...values,publication:e.target.value})} />
  </div>

  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">{labelseven}</label>
    <input type="text" class="form-control" onChange={e=>setvalues({...values,stocks:e.target.value})} />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">{labelsix}</label>
    <input type="text" class="form-control" onChange={e=>setvalues({...values,authorname:e.target.value})} />
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
{adding? <button  class="btn btn-secondary" >Adding . . .</button> :<button  class="btn btn-success" onClick={onsubmit} >Add Book</button>}    
  </div>
</form>
        </div>
    )
}

export default Form