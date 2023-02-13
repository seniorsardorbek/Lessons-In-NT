import React from 'react'
import Button from '../../Butoon/Button'
function Nav({one , onelink , two , twolink , three ,threelink, four ,fourlink}) {
  return (
    <nav>
        <li><a href={onelink}>{one}</a>
        </li>
        <li><a href={twolink}>{two}</a>
        </li>
        <li><a href={threelink}>{three}</a>
        </li>
        <li><a href={fourlink}>{four}</a>
        </li>
        <Button style={'btn1'} btnName={'Call center'}/>
    </nav>
  )
}

export default Nav