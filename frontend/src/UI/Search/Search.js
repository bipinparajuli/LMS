import React from 'react'

const Search = ({placeholder}) => {
    return (
        <div>
            <nav class="navbar navbar-light">
  <div class="container-fluid">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder={placeholder} aria-label="Search" />
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
        </div>
    )
}

export default Search
