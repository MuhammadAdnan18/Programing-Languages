import logo from "./logo.svg";
import "./App.css";

let name = "Adnan";

function App() {
  //inside this function we use jsx(a environment where we can use html with javascrip like here we used name variable )
  //we can style this file from app.css
  return (
    <div classNameName="blank">
      <ul id="navbar">
        <a id="nav">
          <li id="nav-items">Home</li>
          <li id="nav-items">Features</li>
          <li id="nav-items">About</li>
        </a>
      </ul>
      <h1>{name}</h1>
    </div>
  );
}

export default App;
