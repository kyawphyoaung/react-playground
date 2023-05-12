import logo from "./logo.svg";
import "./App.css";
import {useState} from "react";


function App({ library }) {
  const [title,setTitle ] = useState("");
  const [color,setColor ] = useState("#000000");

  const submit = (e) =>{
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle("");
    setColor("#ffffff");    
  }

  return (
    <form onSubmit={submit}>
      <input value={title} onChange={(event)=> setTitle(event.target.value)}  type="text" placeholder="Color Title" />
      <input value={color} onChange={(event)=> setColor(event.target.value)} type="color" />
      <button> ADD </button>
    </form> 
  );
}

export default App;
