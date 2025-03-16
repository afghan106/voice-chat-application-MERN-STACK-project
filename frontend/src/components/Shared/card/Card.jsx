import React from 'react'
import "./Card.css"

const Card = ({title,icon,children}) => {
  return (
    
    <div className="welcome-card" >
      <div className="heading">
        <img src={`/images/${icon}`} height={"60px"} alt="" />
              <h1>{title}</h1>

      </div>
   {children}
     
    </div>
  )
}

export default Card