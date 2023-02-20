import React from 'react'

function Buttons({btnname , btnstyle}) {
    
  return (
    <button className={`${btnstyle} btnpr`}  >{btnname}</button>
  )
}

export default Buttons