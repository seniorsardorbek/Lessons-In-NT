import React from 'react'
import Button from '../Button/Button'
function Nav({one , two , three , four , onelink , twolink , threelink , fourlink }) {
  return (
    <nav className='navbar'>
        <li><a href={onelink} > {one}</a></li>
        <li><a href={twolink} > {two}</a></li>
        <li><a href={threelink} > {three}</a></li>
        <li><a href={fourlink} > {four}</a></li>
    <Button style={'btn1'} btnname={"Call Center"}/>
    </nav>
  )
}

export default Nav