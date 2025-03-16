import React, { useState } from 'react';
import Phone from './phone/Phone';
import Email from './email/Email';
import './stepPhoneEmail.css';

const phoneEmailMap = {
  phone: Phone,
  email: Email,
};

const StepPhoneEmail = ({ onNext }) => {
  const [type, setType] = useState('phone');

  

  const Component = phoneEmailMap[type];

  return (
    <div className="main">
      <div className="buttons " >
        <button  id={`${type==='phone'?"active":''}`} onClick={() => setType('phone')}>
          📱
        </button>
        <button  id={`${type==='email'?"active":''}`} className={`${type === 'email' ? 'active' : ''}`} onClick={() => setType('email')}>
          📧
        </button>
      </div>
      <Component onNext={onNext} />
    </div>
  );
};

export default StepPhoneEmail;