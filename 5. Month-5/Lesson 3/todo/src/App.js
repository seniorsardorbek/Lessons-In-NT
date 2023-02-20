import "./App.scss";
import React from "react";
import Lists from "./components/LIsts/Lists";

function App() {

   const showmessage = (whr , text)=>{
     whr.textContent = text
     setTimeout(() => {
      whr.textContent = "Type your todo"
     }, 1000);
   }
  const [todoArr, settodos] = React.useState(
    JSON.parse(window.localStorage.getItem("todos")) || []
  );
  const inputRef = React.useReducer();
  const infoRef = React.useReducer();
  const handlesub = (e) => {
    e.preventDefault();
    const todo = {
      id: todoArr[todoArr.length - 1]?.id + 1 || 1,
      name: inputRef.current.value,
      iscompleted: false,
    };
    inputRef.current.value ? settodos([...todoArr, todo]) : showmessage(infoRef.current , "Please type something")
    inputRef.current.value = "";
    console.log(todo);
  };

  const deltodo = (e)=>{
     const delid = e.target.id - 0 ;
     console.log(delid);
     const delindex = todoArr.findIndex(item => item.id === delid)
     todoArr.splice(delindex , 1)
     return settodos( [...todoArr])
   }
  const  chektodo =(e) =>{
    const delid = e.target.id - 0 ;
    console.log(delid);
    const delindex = todoArr.find((item) => item.id === delid)
    console.log(delindex);
    delindex.iscompleted = !delindex.iscompleted
    return settodos( [...todoArr])
  }

  window.localStorage.setItem("todos", JSON.stringify(todoArr));
  return (
    <div className="container">
      <span ref={infoRef} className="info">Type your task</span>
      <form onSubmit={handlesub} className="form">
        <input ref={inputRef} placeholder="todo.." className="input" />
        <button className="button">Send</button>
      </form>
      <ul>
        {todoArr.length > 0 &&
          todoArr.reverse().map((item) => <Lists name={item.name} id={item.id} delbtn={deltodo} chek={item.iscompleted} chektodo={chektodo} />)}
      </ul>
    </div>
  );
}

export default App;
