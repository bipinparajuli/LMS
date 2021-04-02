import React from 'react'
import {FaUser} from 'react-icons/fa'


export const Card = ({totalbook,title}) => {
    return (
        <div>
            <div class="card" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title"><FaUser /></h5>
    <h6 className="card-subtitle mb-2">{title}</h6>
    <p className="card-text">{totalbook}</p>
  </div>
</div>
        </div>
    )
}
