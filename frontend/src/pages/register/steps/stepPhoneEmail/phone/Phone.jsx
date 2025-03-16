import React, { useState } from 'react'
import Card from '../../../../../components/Shared/card/Card'
import Button from "../../../../../components/Shared/button/Button"
import TextInput from '../../../../../components/Shared/Textinput/TextInput'
const Phone = ({onNext}) => {

    const [phoneNumber, setPhoneNumber] = useState('1223');
  

    return (
        <Card
            
            title={'☎️ Phone component'}>
            <TextInput value={phoneNumber} placeholder={"+93 775 808 106"} onChange={(e)=>{setPhoneNumber(e.target.value)}} />
            <Button onClick={onNext} text={"Next"} icon={'/images/arrow-forward.svg'}></Button> 
            <p style={{fontSize:"15px",width:"70%",marginTop:"30px"}}>by entering your number , you'r agreeing to our Term of Service and Privacy Policy .thanks!</p>
            </Card>
    
  )
}

export default Phone