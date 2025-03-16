import React from 'react'
import "./button.css"

const Button = ({text,onClick}) => {
  return (
      <button onClick={onClick} className="get-username-button"><span>{ text}</span><img src="/images/arrow-forward.svg" height={'20px'} alt="" /> </button>

  )
}

export default Button