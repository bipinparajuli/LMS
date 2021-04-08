import React,{useState} from 'react'
import { useStateValue } from '../../../Container/Serviceprovider';
import { searchStudentByName } from '../../APIHelper/Studentapi'


const Search = ({placeholder}) => {

  const [student, setstudent] = useState("");

const [{},dispatch] = useStateValue()

  const searchUser = (e) =>{
  e.preventDefault();
console.log(student)
  searchStudentByName(student)
  .then(data=>{

    console.log(data)
dispatch({
  type:"SEARCHSTUDENT",
  item:data
})

  })
.catch(e=> console.log(e))
  }

  return (
        <div>
            <nav className="navbar navbar-light">
  <div className="container-fluid">
    <form className="d-flex">
      <input className="form-control me-2" type="search" onChange={e=>setstudent(e.target.value)} placeholder={placeholder} aria-label="Search" />
      <button className="btn btn-outline-success" type="submit" onClick={searchUser}>Search</button>
    </form>
  </div>
</nav>
        </div>
    )
}

export default Search
