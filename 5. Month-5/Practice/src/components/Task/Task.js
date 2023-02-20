import React from "react";
import { createRef, useState } from "react";
import Lists from "../Lists/Lists";
function Task() {
  const showmessage = (whr, text) => {
    whr.textContent = text;
    setTimeout(() => {
      whr.textContent = "Type your todo";
    }, 1000);
  };

  const [tasks, settask] = useState([]);
  const inputref = createRef();
  const infoRef = createRef();
  const addtask = (e) => {
    e.preventDefault();
    const todo = {
      id: tasks[tasks.length - 1]?.id + 1 || 1,

      name: inputref.current.value,
      iscompleted: false,
    };
    inputref.current.value ? settask([...tasks, todo]) : showmessage(infoRef.current , "Type something");
    inputref.current.value = "";
    console.log(tasks);
  };

  const deltodo = (e) => {
    const delid = e.target.id - 0;
    console.log(delid);
    const delindex = tasks.findIndex((item) => item.id === delid);
    tasks.splice(delindex, 1);
    return settask([...tasks]);
  };
  const chektodo = (e) => {
    const delid = e.target.id - 0;
    console.log(delid);
    const delindex = tasks.find((item) => item.id === delid);
    console.log(delindex);
    delindex.iscompleted = !delindex.iscompleted;
    return settask([...tasks]);
  };

  return (
    <div className="taskcon">
      <div className="head">
        <div className="head-title">
          <h1>Tasks</h1>
          <p ref={infoRef} >Today</p>
        </div>
        <button>View All</button>
      </div>
      <div className="tasksec">

        <form className="taskform" onSubmit={addtask}>
          <input
            ref={inputref}
            type="text"
            className="taskinput"
            placeholder="Create new task"
          />
          <button>+</button>
        </form>
        <ul className="tasks">
          {tasks.length > 0 &&
            tasks
              .reverse()
              .map((item) => (
                <Lists
                  name={item.name}
                  id={item.id}
                  delbtn={deltodo}
                  chek={item.iscompleted}
                  chektodo={chektodo}
                />
              ))}
        </ul>
      </div>
    </div>
  );
}

export default Task;
