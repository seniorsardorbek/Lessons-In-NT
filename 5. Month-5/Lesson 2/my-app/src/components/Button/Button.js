import React from 'react'

function Button({btnname , style}) {
  return (
    <button className={style}>{btnname}</button>
  )
}

export default Button