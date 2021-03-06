import React from 'react'

const Form = ({labelone,labeltwo,labelthree,labelfour,labelfive,labelsix,labelseven}) => {
    return (
        <div>
            <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">{labelone}</label>
    <input type="text" class="form-control" />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">{labeltwo}</label>
    <input type="text" class="form-control"  />
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">{labelfour}</label>
    <input type="text" class="form-control" />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">{labelfive}</label>
    <input type="text" class="form-control"  />
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">{labelseven}</label>
    <input type="text" class="form-control" />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">{labelsix}</label>
    <input type="text" class="form-control"  />
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">{labelthree}</label>
    <select id="inputState" class="form-select">
      <option selected>BCA</option>
      <option>BBM</option>
      <option>BBS</option>
      <option>BSW</option>

    </select>
  </div>

  <div class="col-12">
    <button type="submit" class="btn btn-success">Add Book</button>
  </div>
</form>
        </div>
    )
}

export default Form
