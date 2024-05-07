import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                {/* <img src="./ICON/icon2/favicon.ico" alt=""><u style="font-size: 40px;">SapPhire</u> */}
            </div>
            <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/ulist">UserList</Link></li>
                    <li><a href="/add">AddUser</a></li>
                    <li><a href="">EditUser</a></li>
                    <li><a href="">login</a></li>
                    <li><a href="">Signup</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
