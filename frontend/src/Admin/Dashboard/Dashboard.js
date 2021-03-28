import React from 'react'
import Layout from '../../Layout/Layout'
import { Card } from '../../UI/Card/Card'
import Chart from "../../UI/Chart/Chart"

export const Dashboard = () => {
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
