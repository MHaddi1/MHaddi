import React from 'react'
import "./toggle.css"
import Sun from "../../images/sun.png"
import Moon from "../../images/moon.png"
import { useContext } from 'react'
import { ThemeContext } from '../../context'
const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className='t'>
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <button className='t-btn' onClick={handleClick} style={{left:theme.state.darkMode?0:25}}></button>
    </div>
  )
}

export default Toggle
