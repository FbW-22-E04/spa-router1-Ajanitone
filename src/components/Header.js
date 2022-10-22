import { Link } from "react-router-dom";
import "./Header.css";
import { AiOutlineSlack } from "react-icons/ai";

function Header() {
  return (
    <div className="header">
      <h1>About Me</h1>
      <div className="linkage">
        <Link to="/">Me {<AiOutlineSlack />}</Link>
        <Link to="/hobby">Hobbies {<AiOutlineSlack />}</Link>
        <Link to="/contact">Contact {<AiOutlineSlack />}</Link>
      </div>
    </div>
  );
}

export default Header;
