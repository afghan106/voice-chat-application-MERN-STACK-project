import React, { useState } from 'react';
//importion of the steps
import stepOTP from "../register/steps/stepOTP/stepOTP";
import stepPhoneEmail from "../register/steps/stepPhoneEmail/stepPhoneEmail"


const Authenticate = () => {
    const [step, setStep] = useState(1);
    const steps = {
        1: stepPhoneEmail,
        2:stepOTP
    }
    

    function onNext() {
        setStep(step + 1);
    }
const Step=steps[step]

  return (
      <div className="main">
           
          <Step onNext={onNext} />
     </div>
  )
}

export default Authenticate;