import React,{useState} from 'react'
import './Signin.css'
import {Button,Card,TextField} from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css';
import {FaUser} from 'react-icons/fa'
import {Login} from '../APIHelper/auth'
import {Redirect} from 'react-router-dom'

const Signin = () => {
const [email, setemail] = useState("")
const [password, setpassword] = useState("")

    const Submit =()=> {
Login({email,password}).then(data=>{
    console.log(data)
})
.catch(err=>console.log(err))
    }

    return (
        <div className=".container-fluid signin">
                <Card>
            <div className="login_main color-black">
           <FaUser style={{height:"100px",width:"100px"}}  />
            <TextField rounded="true"   placeholder="Email" color="black" type="email" value={email} onChange={e=>setemail(e.value)} />
            <TextField rounded="true" type="password" placeholder="Password" value={password} onChange={e=>setpassword(e.value)} />
            <Button onClick={Submit}>Login</Button>
            </div>
            </Card>
        </div>
    )
}

export default Signin
