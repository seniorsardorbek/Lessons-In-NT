import React from 'react'

function Lists({name , id , delbtn , chek , chektodo , edittodo }) {
  return (
    <li className={` list ${chek && "opacity"}`} key={id} >
    {name}
    <div className="buttons">
      <button onClick={delbtn} id={id} >Delete</button> <button onClick={edittodo} id={id} disabled={chek} >Edit</button>
      <label >
        <input onClick={chektodo} id={id} type="checkbox" checked={chek}  ></input>
      </label>
    </div>
  </li>
  )
}

export default Lists