import React,{useEffect,useState} from 'react'
import { toast } from 'react-toastify';
import { getAllOrder } from '../../APIHelper/orderHelper';
import { isAuthenticate } from '../../auth'
import Layout from '../../Layout/Layout'

const {user,token} = isAuthenticate();


const IssueRetuenRequest = () => {


const [order, setorder] = useState([])
const [loading, setloading] = useState(false)

const preload = () => {
    setloading(true)
getAllOrder(user._id,token)
.then(data=>{
// console.log(data)

if(data.error)
{
   return toast(`${data.error}`,{type:"info"})
}

    setorder(data)
setloading(false)
}).catch(error=> console.log(error))
    
}


    useEffect(()=>{
preload()
    },[])
return (
<Layout>
<div>
            <h3>Issue and Return Request</h3>
            <table className="table table-border table-hover">
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
order.length === 0?
(
    <h1>You have no order </h1>
)
:
    order.length > 0  ? order.map(data=>(
<tr>
      <td>{data.books[0].bookname}</td>
      <td>{data.books[0].publication}</td>
      <td>{data.users[0].name}</td>
      <td>{data.users[0].email}</td>
      <td>{data.users[0].address}</td>

      <td><span className="badge rounded-pill bg-info text-dark">{data.status}</span>
</td>
      <td><button type="button" className="btn btn-danger mr-1" style={{marginRight:"10px"}}>Reject</button><button type="button" className="btn btn-success">Accept</button></td>

  </tr>

))

          :(
<tr>
      <td>loading . . .</td>
      <td>loading . . .</td>
      <td> loading . . .</td>
      <td>loading . . .</td>
      <td>loading . . .</td>

      <td><span className="badge rounded-pill bg-info text-dark">loading ...</span>
</td>
      <td><button type="button" className="btn btn-danger disabled mr-5 " style={{marginRight:"10px"}}>Reject</button><button type="button" className="btn btn-success disabled">Accept</button></td>

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
