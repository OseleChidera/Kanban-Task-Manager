import React from 'react'
import './toggleswitch.css'
import lightThemeIcon from '../../assets/icon-light-theme.svg'
import darkThemeIcon from '../../assets/icon-dark-theme.svg'
export default function Toggleswitch() {
  return (
    <section className='toggle-div'>
    <div className="toggle-main">
      <img alt='light' src={lightThemeIcon} />
        <label className="switch">
        <input type="checkbox"/>
        <span className="slider"></span>
        </label>
      <img alt='dark' src={darkThemeIcon} />
    </div>
    </section>
  )
}
