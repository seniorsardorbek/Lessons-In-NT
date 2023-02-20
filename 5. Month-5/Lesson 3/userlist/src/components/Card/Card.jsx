import React from 'react'



function Card({avatar , first_name , last_name , email}) {
  return (
    <div className='card'>
        <img src={`${avatar}`} alt="" />
         <h1>{first_name}  {last_name}</h1>
         <a>{email}</a>
    </div>
  )
}

export default Card