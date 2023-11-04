import React from "react"
import Logo from '../assets/Screw_logo.png'

const Navbar = () => {
  return (
    <nav>
        <a href="/"><img src={Logo} alt="Logo" id="logo" /></a>
    </nav>
  )
};

export default Navbar;
