import React,{useState,useEffect} from 'react'
import { getBookById, updateBook } from '../../APIHelper/bookapi'
import { isAuthenticate } from '../../auth/index'
import Layout from '../../Layout/Layout'
import {toast} from 'react-toastify'

const {user,token} = isAuthenticate()


const UpdateBook = ({labelone,labeltwo,labelthree,labelfour,labelfive,labelsix,labelseven,match}) => {
    const [values, setvalues] = useState({
      authorname:"",
      bookname:"",
      publication:"",
      stocks:"",
      department:"",
updating:false
    })
    const {authorname,bookname,publication,stocks,department,updating} = values;


    const preload = (bookid) =>{
        console.log(bookid)
getBookById(bookid).then(data=>{
  console.log(data)
if(data.error || !data)
{
    toast(`${data.error}`,{type:"error"})
}
    setvalues({
        ...values,
        authorname:data.authorname,
        bookname:data.bookname,
        publication:data.publication,
        stocks:data.stocks,
        department:data.department
    })
}).catch()
    }

//SUBMITING THE UPDATED TO BACKEND
    const onsubmit = (e) => {
e.preventDefault()
setvalues({...values,updating:true})

updateBook(user._id,match.params.bookid,token,{authorname,bookname,publication,stocks,department})
 
.then(data=>

{      toast(`Updated successfully`,{type:"success"})
      setvalues({...values,updating:false})
  }
      )
  
      .catch(e=> toast(`${e}`,{type:"success"})
      )

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
    <label for="inputEmail4" class="form-label">{labelone}</label>
    <input type="text" value={bookname} class="form-control" onChange={e=>setvalues({...values,bookname:e.target.value})}  />
  </div>

  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">{labelfour}</label>
    <input type="text" class="form-control" value={publication} onChange={e=>setvalues({...values,publication:e.target.value})} />
  </div>

  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">{labelseven}</label>
    <input type="text" class="form-control" value={stocks} onChange={e=>setvalues({...values,stocks:e.target.value})} />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">{labelsix}</label>
    <input type="text" class="form-control" value={authorname} onChange={e=>setvalues({...values,authorname:e.target.value})} />
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
{updating? <button  class="btn btn-secondary"  >Updating Book</button> : <button  class="btn btn-success" onClick={onsubmit} >Update Book</button>}
<a class="btn btn-primary" href="/dashboard" role="button" style={{marginLeft:"10px"}}>Go Back</a>

  </div>
</form>

        </div>
        </Layout>
    )
}

export default UpdateBook
