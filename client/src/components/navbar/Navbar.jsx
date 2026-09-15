import { useState,useContext } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";

function Navbar() {
  const [open, setOpen] = useState(false);
  const {currentUser}=useContext(AuthContext);
  
  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);

  if(currentUser) fetch();

  
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Smart<span className="accent">Space</span></span>
        </a>
        <a href="/">Home</a>
        {/* <a href="/">About</a> */}
        <a href="/list">Show All Properties</a>
        
        <a href="mailto:2001palash@gmail.com">Support Team</a>
      </div>
      <div className="right">
        {currentUser ? (
          <Link to="/profile" className="user">
            <img
              src={currentUser.avatar || "/noavatar.jpg"}
              alt=""
            />
            <span>{currentUser.username}</span>
            {number > 0 && <div className="notification">{number}</div>}
          </Link>
        ) : (
          <>
            <a href="/login" className="signin">Sign in</a>
            <a href="/register" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
