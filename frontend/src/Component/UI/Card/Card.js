import React from 'react'


export const Card = ({totalbook,title,icon}) => {
    return (
        <div>
            <div className="card " style={{width: "18rem",boxShadow:"3px 3px 5px 6px #ccc",backgroundColor:"#CAD5E2"}}>
  <div className="card-body" className="animate__animated  animate__fadeInTopLeft">
    <h5 className="card-title">{icon}</h5>
    <h6 className="card-subtitle mb-2">{title}</h6>
    <p className="card-text">{totalbook}</p>
  </div>
</div>
        </div>
    )
}
