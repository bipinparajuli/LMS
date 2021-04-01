import React, { lazy } from 'react'
import { Card } from '../../UI/Card/Card'
import Chart from "../../UI/Chart/Chart"
const Layout = lazy(()=> import("../../Layout/Layout")) 


 const Dashboard = () => {
    return (
<Layout>
     <div>
  <h1> Welcome to Dashboard Page</h1> 
  <div className="row">
      <div className="col-4">
      <Card title="Total Books" />
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