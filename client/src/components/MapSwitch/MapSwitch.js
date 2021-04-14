import React from 'react'
import './MapSwitch.css'

function MapSwitch(props) {
  return (
    <div className="switch">
      <input type="checkbox" checked id="switch-1" className="switch-check" />
      <label htmlFor="switch-1" className="switch-label">
        Option
        <span className="switch-slider switch-slider-on"></span>
        <span className="switch-slider switch-slider-off"></span>
      </label>
    </div>
  )
}

export default MapSwitch
