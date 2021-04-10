import React,{useEffect,useState} from 'react'
import { getAllOrder } from '../../APIHelper/orderHelper';
import { isAuthenticate } from '../../auth'
import Layout from '../../Layout/Layout'

const {user,token} = isAuthenticate();


const IssueRetuenRequest = () => {
const initialState ={
    bookname:""
}

const [order, setorder] = useState([])
    const preload = () => {
getAllOrder(user._id,token)
.then(data=>{
setorder(data)
}).catch(error=> console.log(error))
    }


    useEffect(()=>{
preload()
    },[])
return (
<Layout>
<div>
            <h3>Issue and Return Request</h3>
            <table className="table table-dark table-hover">
  <thead>
  <tr>
      <th>Book Name</th>
      <th>Publication</th>
      <th>Order by</th>
      <th>Orderer Email</th>
      <th>Orderer Address</th>

<th>Request Type</th>
      <th></th>

      </tr>
  </thead>
  <tbody>
      {
    order !== undefined && order !==[] ? order.map(data=>(
<tr>
      <td>{data.book.bookname}</td>
      <td>{data.publication}</td>
      <td>{data.user.name}</td>
      <td>{data.user.email}</td>
      <td>{data.user.address}</td>

      <td><span className="badge rounded-pill bg-info text-dark">{data.status}</span>
</td>
      <td><button type="button" className="btn btn-danger mr-1">Reject</button><button type="button" className="btn btn-success">Accept</button></td>

  </tr>
          ))

          :(
<tr>
      <td>loaing . . .</td>
      <td>loaing . . .</td>
      <td> loaing . . .</td>
      <td>loaing . . .</td>
      <td>loaing . . .</td>

      <td><span className="badge rounded-pill bg-info text-dark">loading ...</span>
</td>
      <td><button type="button" className="btn btn-danger mr-1">Reject</button><button type="button" className="btn btn-success">Accept</button></td>

  </tr>              
          )
      }
  
  </tbody>
</table>

        </div>
        </Layout>
    )
}

export default IssueRetuenRequest
