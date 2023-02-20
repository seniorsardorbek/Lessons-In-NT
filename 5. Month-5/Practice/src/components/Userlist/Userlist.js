import React from "react";
import settinh from '../../images/settin.png'
function Userlist({ img, title, update, cname, cactive, button }) {
     const fullday = React.createRef()
     const hourr = React.useReducer()
    function getTime() {
        const now = new Date();
        const date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
        const month =
        now.getMonth() < 10 ? "0" + (now.getMonth() + 1) : now.getMonth();
        const year = now.getFullYear();
        const hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
        const minute =
          now.getMinutes() < 10 ? "0"  + now.getMinutes() : now.getMinutes();
          fullday.current.textContent = `${date}/${month}/${year}`;
          hourr.current.textContent = `${date}/${month}/${year}`;
          // hourr.current.textContent = `${hour}:${minute}` ;
        return `${hour}:${minute}  ${date}.${month}.${year}`;
      }
      setInterval(() => {
        getTime();
      }, 1000);


  return (
    <li className="userlist">
      <div className="userdata">
        <img src={img} alt="avatarka" />
        <h1>
         {title} <span>{update}</span>
        </h1>
      </div>
      <div className="customerdata">
        <h2>{cname}<span>{cactive}</span></h2>
        <h2 ref={fullday}>May 26, 2019<span ref={hourr}>6:30 PM</span></h2>
        {button}
        <button className="setting"><img src={settinh} alt="btn" height={20} /></button>
      </div>
    </li>
  );
}

export default Userlist;
