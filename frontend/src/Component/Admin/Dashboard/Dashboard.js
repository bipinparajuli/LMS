import React, { lazy,useEffect,useState } from 'react'
import { Card } from '../../UI/Card/Card'
import Chart from "../../UI/Chart/Chart"
import AOS from 'aos'
import { getAllBook } from '../../APIHelper/bookapi'
const Layout = lazy(()=> import("../../Layout/Layout")) 


 const Dashboard = () => {
   const [Total, setTotal] = useState("calculating...")

  const preload = () => {
      getAllBook().then(data=>{
          setTotal(data.length)
      })
  }
  
    useEffect(() => {
       
preload()
    }, []);
    

   return (
<Layout>
     <div>
  <h1 className="animate__animated animate__bounce"> Welcome to Dashboard Page</h1> 
  <div 
   className="row"
   >
      <div
       className="col-4">
      <Card totalbook={Total} title="Total Books" />
      </div>
      <div className="col-4">
      <Card title="Book Issued" />
      </div>
      <div className="col-4">
      <Card title="Book Returned" />
      </div>
  </div>
<Chart />
        </div>
        </Layout>

    )
}

export default Dashboard