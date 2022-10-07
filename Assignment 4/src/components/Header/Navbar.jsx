import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    const user = localStorage.getItem("user");
    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div className="navbar">
            <ul className="nav-links">
                <Link to="/">Home</Link>
            </ul>
            <ul className="nav-links">
                <Link to="/about">About</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/login">Login</Link>
            </ul>
            <div className="main-logout">
                <span className="user"> {user} </span>
                {user && (
                    <button className="btn-logout" onClick={logout}>
                        Logout
                    </button>
                )}
            </div>
        </div>
    );

}
export default Navbar;