import React from 'react'
import Layout from '../../Layout/Layout'
const IssueRetuenRequest = () => {
    return (
<Layout>
<div>
            <h3>Issue and Return Request</h3>
            <table class="table table-dark table-hover">
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
      <td><span class="badge rounded-pill bg-info text-dark">Return</span>
</td>
      <td><button type="button" class="btn btn-danger mr-1">Reject</button><button type="button" class="btn btn-success">Accept</button></td>

  </tr>
  </tbody>
</table>

        </div>
        </Layout>
    )
}

export default IssueRetuenRequest
