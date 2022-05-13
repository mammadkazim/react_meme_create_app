import "./Header.css";
import troll from "./troll.png";
function Header() {
  return (
    <header className="header">
      <div className="left">
        <img className="logo-img" src={troll}></img>
        <h1>Meme Generator</h1>
      </div>
      <div className="right">
        <h3>React Course - Project 3</h3>
      </div>
    </header>
  );
}

export default Header;
