import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faQuestionCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="nav-buttons">
        <button onClick={() => navigate("staff")} className="nav-btn">
          Staff
        </button>

        <button onClick={() => navigate("add")} className="nav-btn add-btn">
          <FontAwesomeIcon icon={faPlusCircle} className="plus-icon" />
          &nbsp;Add
        </button>
      </div>

      <button className="profile-icon" onClick={() => navigate("admin")}>
        <i className="fas fa-user-circle"></i>
      </button>

      <div className="nav-buttons">
        <button onClick={() => navigate("help")} className="nav-btn">
          <FontAwesomeIcon icon={faQuestionCircle} />
          &nbsp;Reference / Help
        </button>

        <button onClick={() => navigate("/login")} className="nav-btn">
          <FontAwesomeIcon icon={faSignOutAlt} />
          &nbsp;Logout
        </button>
      </div>
    </div>
  );
}
