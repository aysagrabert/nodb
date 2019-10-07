import React from "react";
import './Header.css';

import new2 from './new2.png'


function Header() {
  return (
    <div className="Header">
    <img src={new2} height='70'/>
      <button className='flights'>Find Flight's</button>
    </div>
  );
}

export default Header;