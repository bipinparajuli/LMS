import React from 'react'

const Table = ({firsthead,secondhead,thirdhead}) => {
    return (
        <div>
<table class="table table-dark table-hover">
  <thead>
  <tr>
      <th>{firsthead}</th>
      <th>{secondhead}</th>
      <th>{thirdhead}</th>
      <th></th>

      </tr>
  </thead>
  <tbody>
  <tr>
      <td>heloo</td>
      <td>heloo</td>

      <td>heloo</td>

      <td><button type="button" class="btn btn-danger mr-1">Delete</button><button type="button" class="btn btn-primary">Edit</button></td>

  </tr>
  </tbody>
</table>
        </div>
    )
}

export default Table
