import "./App.css";
import axios from "axios";
import looader from "./img/loader.svg";

import { useEffect, useRef, useState } from "react";

function App() {
  const [loader, setload] = useState(false);
  const [loadera, setloada] = useState(false);
  const [loaderc, setloadc] = useState(false);
  const [users, setuser] = useState([]);
  useEffect(() => {
    setloada(true);
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setloada(false);
      setuser(res.data);
    });
    console.log(users);
  }, []);

  const [posts, setposts] = useState([]);
  const showpost = (e) => {
    setload(true);
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setload(false);
      setposts(res.data.filter((item) => item.userId === Number(e.target.id)));
    });
  };
  const [commets, setcommets] = useState([]);
  const showcommets = (e) => {
    setloadc(true);
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setloadc(false);
      setcommets(
        res.data.filter((item) => item.postId === Number(e.target.id))
      );
    });
  };
  console.log(commets);
  return (
    <div className="App">
      {loadera ? (
        <img src={looader} />
      ) : (
        <ul>
          {users.length > 0 &&
            users.map((user) => (
              <li key={user.id}>
                {user.name + " " + user.username}{" "}
                <a href={`"mailto:${user.email}`}>{user.email}</a>{" "}
                <div className="buttons">
                  {" "}
                  <button id={user.id} onClick={showpost}>
                    Show posts
                  </button>
                  <button id={user.id} onClick={showcommets}>
                    Show commets
                  </button>
                </div>
              </li>
            ))}
        </ul>
      )}
      {loader ? (
        <img src={looader} />
      ) : (
        <ul className="postlist">
          {posts.length > 0 &&
            posts.map((user) => (
              <li className="posts" key={user.id}>
                <h4>{user.title}</h4>
                {user.body} <a href={`"mailto:${user.email}`}>{user.email}</a>{" "}
              </li>
            ))}
        </ul>
      )}
      {loaderc ? (
        <img src={looader} />
      ) : (
        <ul className="modalcommets">
          {commets.length > 0 &&
            commets.map((user) => (
              <li className="posts" key={user.id}>
                <h4>{user.name}</h4>
                {user.body}{" "}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default App;
