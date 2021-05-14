import React,{useState,useEffect} from 'react'
import {addBook} from '../../APIHelper/bookapi'
import { isAuthenticate } from '../../auth'
import {toast} from 'react-toastify'
import ClipLoader from "react-spinners/ClipLoader";
import { useStateValue } from '../../../Container/Serviceprovider';
import { getAllDepartment } from '../../APIHelper/departmentHelper';

const Form = ({labelone,labelthree,labelfour,labelsix,labelseven}) => {

const [{departments},dispatch]= useStateValue()

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
// const [d,setd]=useState()

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
    useEffect(()=>{
// setd(departments) 
      getAllDepartment(user._id,token)
        .then(data=>{

          if(data.error)
          {
            return toast(data.error,{type:"info"})
          }
          dispatch({
                type:"DEPARTMENT",
                item:data
            })
        })
        .catch(err=> console.log(err))  
    },[])


  const onsubmit = e =>{
e.preventDefault();
setvalues({...values,adding:true})
addBook(user._id,token,{bookname,publication,stocks,authorname,department})
.then(d=> 
  {
// console.log(d)
      if(d.error)
      {
        setvalues({...values,error:d.error})
        toast(`${d.error}`,{type:'error'})
    
      }
      else{
        toast("Book Added",
        {
          type:'success'
        })
      }
    
    setvalues({...values,adding:false})
   
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    )
  })
  
.catch(e=>{
  toast("Book Added" + e,
{
  type:'success'
})})

  }



  return (
        <div>
          {errorMessege()}
            <form className="row g-3">
  <div className="col-md-6">
    <label  className="form-label">{labelone}*</label>
    <input type="text" className="form-control" required onChange={e=>setvalues({...values,bookname:e.target.value})}  />
  </div>

  <div className="col-md-6">
    <label  className="form-label">{labelfour}*</label>
    <input type="text" className="form-control" required onChange={e=>setvalues({...values,publication:e.target.value})} />
  </div>

  <div className="col-md-6">
    <label  className="form-label">{labelseven}*</label>
    <input type="text" className="form-control" required onChange={e=>setvalues({...values,stocks:e.target.value})} />
  </div>
  <div className="col-md-6">
    <label  className="form-label">{labelsix}*</label>
    <input type="text" className="form-control" required onChange={e=>setvalues({...values,authorname:e.target.value})} />
  </div>
  <div className="col-md-4">
    <label  className="form-label">{labelthree}</label>
    <select id="inputState"  className="form-select" onChange={e=>setvalues({...values,department:e.target.value})}>
     {
departments.map((data,i)=>{
// console.log(departments)
  return(
    <option   key={i} value={data.name}>{data.name}</option>

  )

})
     }
      
    </select>
  </div>

  <div className="col-12">
{adding? <button  className="btn btn-success" style={{boxShadow:"3px 3px 4px 3px #ccc",background:"#8D3DAF"}} ><ClipLoader color={"white"} loading={adding}  size={50} /> 
</button> :<button  className="btn btn-success" style={{boxShadow:"3px 3px 4px 3px #ccc",background:"#8D3DAF"}} onClick={onsubmit} >Add Book</button>}    
  </div>
</form>
        </div>
    )
}

export default Form
