import React,{useState} from 'react'
import './Signin.css'
import {Button,Card,TextField} from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css';
import {FaUser} from 'react-icons/fa'
import {Login} from '../APIHelper/auth'
import {Redirect} from 'react-router-dom';
import { Authenticate, isAuthenticate } from '../auth';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";


const Signin = () => {
const [email, setemail] = useState("")
const [password, setpassword] = useState("")
const [didredirect, setdidredirect] = useState(false)
const [loader, setloader] = useState(false)
const [error, seterror] = useState(false)
const [messege, setmessege] = useState(false)


const errorMessege = () => {
    return (
    <div className="row">
    <div className="col-md-6 offset-sm-3 text-left">
    <div className="alert alert-danger" style={{display: error ? "" : "none"}}>
    {messege}
    </div>
    </div>
    </div>
    )
    
    }
    

const {user} =isAuthenticate();
    const Submit =()=> {
        setloader(true)
Login({email,password}).then(data=>{

    if(data.error)
    {
        setemail("")
        setpassword("")
        setloader(false)
        seterror(true)
        setmessege(data.error)
    }

Authenticate(data,()=>{
    setemail("");
    setpassword("");
    // console.log(user.role)
   
    setdidredirect(true)
})
    
})
.catch(err=>console.log(err))
    }


    if(didredirect)
 {
    if(user && user.role == 1)
    {
        // setloader(false)
        return <Redirect to="/dashboard" />
    }
}
    return (
<div className=".container-fluid signin">
{
error ?
<> {errorMessege()}
<Card>
{/* <ClipLoader color={"red"} loading={loader}  size={150} />  */}
<div className="login_main color-black">
<FaUser style={{height:"100px",width:"100px"}}  />
<TextField required rounded="true"   placeholder="Email" color="black" type="email" value={email} onChange={e=>setemail(e.value)} />
<TextField required rounded="true" type="password" placeholder="Password" value={password} onChange={e=>setpassword(e.value)} />
<Button onClick={Submit}>Login</Button>
</div>
</Card>
</>
:<Card>
            <ClipLoader color={"red"} loading={loader}  size={150} /> 

<div className="login_main color-black">
<FaUser style={{height:"100px",width:"100px"}}  />
<TextField required rounded="true"   placeholder="Email" color="black" type="email" value={email} onChange={e=>setemail(e.value)} />
<TextField required rounded="true" type="password" placeholder="Password" value={password} onChange={e=>setpassword(e.value)} />
<Button onClick={Submit}>Login</Button>
</div>
</Card>
}
        </div>
    )
}

export default Signin
