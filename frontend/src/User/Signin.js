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


const Signin =  () => {
const [values,setvalue] = useState({
    // email:"",
    password:"",
    didredirect:false,
    loader:false,
    error:false,
    messege:""
})
const [email, setemail] = useState("")

const {password,didredirect,loader,error,messege} = values;

const errorMessege = () => {
    return (
    <div className="row">
    <div className="col-md-6 offset-sm-3 text-left" style={{display: error ? "" : "none"}}>
    <div className="alert alert-danger" >
    {messege}
    </div>
    </div>
    </div>
    )
    
    }
    

const {user} =isAuthenticate();


const Submit = async ()=> {
    console.log(email,password)
  await  setvalue({...values,loader:true,password:"",email:""})

      await  Login({email,password}).then(data=>{

    if(data.error)
    {
        console.log("error")
setemail("")
 setvalue({...values,password:""})
    }   
else{
    Authenticate(data,()=>{
setemail("")
        setvalue({...values,didredirect:true})
    
    })
}

    
})
.catch(e=>console.log(e),setvalue({...values,password:"",error:true,loader:true}))
    }

const performRedirect = () =>{
    if(didredirect)
    {
       if(user && user.role == 1)
       {
   
           return <Redirect to="/dashboard" />
       }
   }
}


    


const signinForm = () => {
    return (
        <div className=".container-fluid signin">
<Card>
            <ClipLoader color={"red"} loading={loader}  size={150} /> 
<div className="login_main color-black">
<FaUser style={{height:"100px",width:"100px"}}  />
<TextField required rounded="true"   placeholder="Email" color="black" type="email" value={email} onChange={e=>setemail(e.value)} />
<TextField required rounded="true" type="password" placeholder="Password" value={password} onChange={e=>setvalue({...values,password:e.value})} />
<Button type="submit" onClick={Submit}>Login</Button>
</div>
</Card>
        </div>
    )
}




    return (
<>
{errorMessege()}
    {signinForm()}
    {performRedirect()}
 </>
    )
}

export default Signin
