import React,{useState} from 'react'
import {addBook} from '../../APIHelper/bookapi'
import { isAuthenticate } from '../../auth'

const Form = ({labelone,labeltwo,labelthree,labelfour,labelfive,labelsix,labelseven}) => {

  const {user,token} = isAuthenticate()
  const [values, setvalues] = useState({
    authorname:"",
    bookname:"",
    publication:"",
    stocks:"",
    department:"",
    // formData:""
  })

  const {name,publication,stock,author,department,formData} = values;

  const onsubmit = e =>{
e.preventDefault();
console.log(values)
addBook(user._id,token,values)
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
        <div>
            <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">{labelone}</label>
    <input type="text" class="form-control" onChange={handleChange("bookname")}  />
  </div>

  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">{labelfour}</label>
    <input type="text" class="form-control" onChange={handleChange("publication")} />
  </div>

  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">{labelseven}</label>
    <input type="text" class="form-control" onChange={handleChange("stocks")} />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">{labelsix}</label>
    <input type="text" class="form-control" onChange={handleChange("authorname")} />
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">{labelthree}</label>
    <select id="inputState" class="form-select" onChange={handleChange("department")}>
      <option value="BCA">BCA</option>
      <option value="BBM">BBM</option>
      <option value="BBS">BBS</option>
      <option value="BSW">BSW</option>
    </select>
  </div>

  <div class="col-12">
    <button  class="btn btn-success" onClick={onsubmit} >Add Book</button>
  </div>
</form>
        </div>
    )
}

export default Form
