import React,{useState,useEffect} from 'react'
import StudentHome from '../StudentHome'
import img from '../../Assets/Image/femlae.png'
// import { Card } from '../../UI/Card/Card'
import "./Profile.css"
import { isAuthenticate } from '../../auth'
import { getStudentById } from '../../APIHelper/Studentapi'
import { useStateValue } from '../../../Container/Serviceprovider'

const {user,} = isAuthenticate();


const Profile = () => {
 const [{},dispatch] = useStateValue();

    const [state, setstate] = useState("Loading ...")


const preload = (id) => {

    console.log(id)

    getStudentById(id)
    .then(data=>
        {
            console.log(data)

            dispatch({
    type:"STUDENT",
    item:data
})
            setstate(data)

        })
    .catch(e=> console.log(e))
    }

useEffect(()=>{
preload(user._id)
},[])

    return (
      <>
      <StudentHome>
      <div className="row">
      <div className="col-3">
           <div class="text-center" style={{borderRadius:"50%"}}>
  <img src={img} class="rounded" alt="logoes" style={{height:"200px",width:"200px"}} />
</div> 
</div>
{/* <div className="row">
<div className="col-3">
<Card title="Total Issued" totalbook="3" />
</div>
<div className="col-3">
<Card title="To be Returned" totalbook="3" />
</div>
<div className="col-3">
<Card title="Total Book Available" totalbook="3" />
</div>
</div> */}
<div className="col-9">
    <span className="lead">Full Name</span>
    <input  type="text" value={state.name} /><br/>
    <span className="lead">Email</span>
    <input type="text" value={state.email} /><br/>
    <span className="lead">Address</span>
    <input type="text" value={state.address} /><br/>
    <span className="lead">Department</span>
    <input type="text" value={state.department} /><br/>
    <span className="lead">Roll no</span>
    <input type="text" value={state.roll_no} /><br/>
    {/* <input type="text" /><br/> */}
    <span className="lead">Contact no.</span>
    <input type="text" value={state.phone} /><br/>
    {/* <input type="text" /><br/> */}
</div>


</div>
        </StudentHome>

    </>
    )
}

export default Profile
