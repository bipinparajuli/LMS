import React from 'react'
import Layout from '../../Layout/Layout'
const IssueRetuenRequest = () => {
    return (
<Layout>
<div>
            <h3>Issue and Return Request</h3>
            <table className="table table-dark table-hover">
  <thead>
  <tr>
      <th>Book ID</th>
      <th>Roll No.</th>
      <th>Book Name</th>
      <th>Stocks</th>
<th>Request Type</th>
      <th></th>

      </tr>
  </thead>
  <tbody>
  <tr>
      <td>heloo</td>
      <td>heloo</td>
      <td>heloo</td>
      <td>heloo</td>
      <td><span className="badge rounded-pill bg-info text-dark">Return</span>
</td>
      <td><button type="button" className="btn btn-danger mr-1">Reject</button><button type="button" className="btn btn-success">Accept</button></td>

  </tr>
  </tbody>
</table>

        </div>
        </Layout>
    )
}

export default IssueRetuenRequest
