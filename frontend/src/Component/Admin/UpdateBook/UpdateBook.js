import React,{useState,useEffect} from 'react'
import { getBookById, updateBook } from '../../APIHelper/bookapi'
import { isAuthenticate } from '../../auth/index'
import Layout from '../../Layout/Layout'
import {toast} from 'react-toastify'
// import Arrow from '@material-ui/icons/ArrowRightAlt'
import Arrow from '../../UI/Icons/Arrows'
import ClipLoader from "react-spinners/ClipLoader";
import {ArrowBackSharp} from '@material-ui/icons'

import { Link } from 'react-router-dom'

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
        // console.log(bookid)
getBookById(bookid).then(data=>{
  // console.log(data)
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

console.log(user._id)

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
<Link style={{position:"absolute",left:"250px"}} to="/allbook"><ArrowBackSharp/></Link>

        <div>
               <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Book Name</label>
    <input type="text" value={bookname} className="form-control" onChange={e=>setvalues({...values,bookname:e.target.value})}  />
  </div>

  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Publication</label>
    <input type="text" className="form-control" value={publication} onChange={e=>setvalues({...values,publication:e.target.value})} />
  </div>

  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Stocks</label>
    <input type="text" className="form-control" value={stocks} onChange={e=>setvalues({...values,stocks:e.target.value})} />
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Author Name</label>
    <input type="text" className="form-control" value={authorname} onChange={e=>setvalues({...values,authorname:e.target.value})} />
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">Department</label>
    <select id="inputState" className="form-select" onChange={e=>setvalues({...values,department:e.target.value})}>
      <option value="BCA">BCA</option>
      <option value="BBM">BBM</option>
      <option value="BBS">BBS</option>
      <option value="BSW">BSW</option>
    </select>
  </div>

  <div className="col-12">
{updating? 

<button className="btn btn-success">
<ClipLoader color={"#8D3DAF"} loading={updating}  size={50} /> 
</button>
 

: <button  className="btn btn-success" onClick={onsubmit} >Update Book <Arrow /></button>}

  </div>
</form>

        </div>
        </Layout>
    )
}

export default UpdateBook
