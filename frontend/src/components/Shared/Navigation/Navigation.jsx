import React from 'react';
import { Link } from 'react-router-dom'
import styles from "./Navigation.module.css";

const Navigation = () => {


  const brandStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: "bold",
    fonsSize: "22px",
    display: "flex",
    alignItems: "center",
  };

  const logo = {
    marginLeft: "10px",
  };

  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={brandStyle} to={'/'}>
        <img  src="/images/logo.svg" alt="Logo" height={'40px'} />
        <span style={logo}>BAHASE</span>
      </Link>
    
    </nav>
  )
}

export default Navigation