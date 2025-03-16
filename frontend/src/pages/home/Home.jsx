// src/HomePage.js
import React from 'react';
import './HomePage.css'; // Create a CSS file for styling
import {Link,useHistory} from 'react-router-dom'
import Card from '../../components/Shared/card/Card';
import Button from '../../components/Shared/button/Button';



const HomePage = () => {
  
  const history = useHistory();
  function startRegister() {
    history.push("/authenticate");
  }




  return (<div className="homepage" >

    <Card title='welcome to BAHASE-APP !' icon='Logo.svg'>
       <p className='pharagraph'> We're working hard to get THIS APP ready for everyone!
 While we wrap up the finishing touches, we're adding people
      gradually to make sure nothing breaks :)
    </p>
      <div className="button-container">

        <Button text='Lets go' onClick={startRegister} />
        <div className='links'>
          <p>have an invite text ?</p>
          <Link className="link" to={"/login"}>sing in</Link>
          
        </div>
      </div>
</Card>

    {/* <div className="welcome-card" >
      <div className="heading">
        <img src="/images/logo.svg" height={"60px"} alt="" />
        <h1><span style={{fontSize:"20px"}}>Welcome to</span> <span style={{color:"rgb(255, 200, 0)"}}>waley-Khabarey!</span></h1>

      </div>
      <p className='pharagraph'> We're working hard to get Codershouse ready for everyone!
 While we wrap up the finishing touches, we're adding people
      gradually to make sure nothing breaks :)
    </p>
      <div className="button-container">
        <button className="get-username-button">Get your username</button>

        <div className='links'>
          <p>have an invite text ?</p>
          <Link className="link" to={"/login"}>sing in</Link>
          
        </div>
      </div>
    </div> */}
    </div>);
}

;

export default HomePage;