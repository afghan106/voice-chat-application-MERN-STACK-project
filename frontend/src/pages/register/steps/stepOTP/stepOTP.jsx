import React, { useState } from 'react'
import Button from '../../../../components/Shared/button/Button'
import styles from "./stepOTP.module.css";
import Card from '../../../../components/Shared/card/Card';
import TextInput from '../../../../components/Shared/Textinput/TextInput';

const OTP = ({ onNext }) => {
  const [otp,setOtp]=useState('')
  return (
    <>
      <Card title={"🔒 Enter the OTP we just text you"}>
        <TextInput value={otp} placeholder={'1234'} onchange={(e)=>setOtp(e.target.value)}/>
        <Button onClick={onNext} text={"Next"} />
         <p>didn't rescived ? <a styles={{}} href="/authenthecate">Send Again</a></p>
      </Card>
      
    </>
  )
}

export default OTP