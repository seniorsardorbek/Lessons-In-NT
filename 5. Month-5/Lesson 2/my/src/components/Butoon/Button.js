import React from 'react'

function Button({style , btnName} ) {
  return (
    <button className={`${style}`}>{btnName}</button>
  )
}

export default Button