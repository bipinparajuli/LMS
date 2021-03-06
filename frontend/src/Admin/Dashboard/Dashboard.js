import React from 'react'
import { Card } from '../../UI/Card/Card'
import Chart from "../../UI/Chart/Chart"


export const Dashboard = () => {
    return (
        <div>
  <h1> Welcome to Dashboard Page</h1> 
  <div className="row">
      <div className="col-4">
      <Card/>
      </div>
      <div className="col-4">
      <Card/>
      </div>
      <div className="col-4">
      <Card/>
      </div>
  </div>
<Chart />
        </div>
    )
}
