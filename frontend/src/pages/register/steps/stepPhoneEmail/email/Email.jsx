import React, { useState } from 'react'
import Card from '../../../../../components/Shared/card/Card'
import Button from "../../../../../components/Shared/button/Button"
import TextInput from '../../../../../components/Shared/Textinput/TextInput'

const Email = ({ onNext }) => {
    const[Email,setEmail]= useState('')
    return (
        <Card
            title={'📩 email component'}>
            <TextInput placeholder={"afghansa@gmail.com"} value={Email}  onChange={(e)=>{setEmail(e.target.value)}} />
            <Button onClick={onNext} text={"Next"} icon={"/images/errow-forward.svg"} ></Button> 
                        <p style={{fontSize:"15px",width:"70%",marginTop:"30px"}}>by entering your email-address , you'r agreeing to our Term of Service and Privacy Policy.thanks!</p>

            </Card>
    
  )
}

export default Email