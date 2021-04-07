import React from 'react'
import {FaUser} from 'react-icons/fa'


export const Card = ({totalbook,title}) => {
    return (
        <div>
            <div className="card animate__animated  animate__fadeInTopLeft" style={{width: "18rem"}}>
  <div className="card-body" className="animate__animated  animate__fadeInTopLeft">
    <h5 className="card-title"><FaUser /></h5>
    <h6 className="card-subtitle mb-2">{title}</h6>
    <p className="card-text">{totalbook}</p>
  </div>
</div>
        </div>
    )
}
