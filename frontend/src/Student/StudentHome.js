import React from 'react'
import Layout from '../Layout/Layout'
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import "./StudentHome.css"


const StudentHome = () => {


    return (
        <div>
        <Layout data-splitting style={{}}>
            This is Student Home page
        </Layout>
        {Splitting}
        </div>
    )
}

export default StudentHome
