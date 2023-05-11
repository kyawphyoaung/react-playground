import logo from "./logo.svg";
import "./App.css";
import { useReducer } from "react";

function App({ library }) {
  const [checked, setChecked] = useReducer((checked) => !checked,false);
  return (
    <div className="App">
      <input
        type="checkbox"
        value={checked}
        onChange={setChecked}
      />
      <label> {checked ? "checked" : "not checked"}</label>
    </div>
  );
}

export default App;