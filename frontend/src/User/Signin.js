import React from 'react'
import './Signin.css'
import {Button,Card,TextField} from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css';
import {FaUser} from 'react-icons/fa'


const Signin = () => {
    return (
        <div className=".container-fluid signin">
                <Card>
            <div className="login_main color-black">
           <FaUser style={{height:"100px",width:"100px"}}  />
            <TextField rounded="true"   placeholder="Email" color="black" type="email" name="" id=""/>
            <TextField rounded="true" type="password" placeholder="Password"/>
            <Button>Login</Button>
            </div>
            </Card>
        </div>
    )
}

export default Signin
