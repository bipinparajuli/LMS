import React, { lazy,useEffect,useState } from 'react'
import { Card } from '../../UI/Card/Card'
import Chart from "../../UI/Chart/Chart"
import image from '../../Assets/Image/a.svg'
import './Dasboard.css'
import { getAllBook } from '../../APIHelper/bookapi'
import { useStateValue } from '../../../Container/Serviceprovider'
import { getallusers } from '../../APIHelper/auth'
import { getAllOrder } from '../../APIHelper/orderHelper'
import { isAuthenticate } from '../../auth'
import BookIcon from '@material-ui/icons/MenuBookSharp'
import Order from '@material-ui/icons/LibraryBooksSharp'
import {FaUser} from 'react-icons/fa'
// import { getAllDepartment } from '../../APIHelper/departmentHelper'

const Layout = lazy(()=> import("../../Layout/Layout")) 

const {user,token} = isAuthenticate();

const Dashboard = () => {

    const [{},dispatch] = useStateValue()

    const [Total, setTotal] = useState("calculating...")
    const [toaluser, settoaluser] = useState("calculating...")
    const [totalorder, settotalorder] = useState("calculating...")
  
  
    const preload = () => {

        getAllBook().then(data=>{
          setTotal(data.length)
          dispatch({
            type:"TOTALBOOK",
            item:data.length
        })
        })
  
      getallusers().then(data=>{
settoaluser(data.length)
dispatch({
    type:"TOTALUSER",
    item:data.length
})
})
      .catch(err=>console.log(err))
  
getAllOrder(user._id,token)
.then(data=>
    {
        settotalorder(data.length)
        dispatch({
            type:"TOTALORDER",
            item:data.length
        })
    })
.catch(err=> console.log(err))



    }
  
    useEffect(() => {
             
preload()
    }, []);
    

   return (
<Layout>
     <div>
         <div className="row dashboard_banner">
                    <div className="col-8" >
                    <h1 className="animate__animated animate__bounce">Hi, Admin</h1> 
                    <p className="lead">Ready to start your day with some new data<span style={{backgroundColor:"#8D3DAF",color:'white'}} className="animate__animated animate__flash animate__infinite">?</span></p>
                    </div>

                    <div className="col-4">
                    <img src={image} class="img-fluid" alt="" />
                    </div>

        
         </div>
  <div className="row card_main">
      <div
       className="col-4">
      <Card totalbook={Total} icon={<BookIcon/>} title="Total Books" />
      </div>
      <div className="col-4">
      <Card totalbook={toaluser} icon={<FaUser/>} title="Total User" />
      </div>
      <div className="col-4">
      <Card totalbook={totalorder} icon={<Order/>} title="All order" />
      </div>
  </div>

<Chart style={{margin:'20px'}} />
        </div>
        </Layout>

    )
}

export default Dashboard