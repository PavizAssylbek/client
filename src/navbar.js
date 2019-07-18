    
import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
      return (
            <ul className="menu-main">
              <li><Link to="/">Данные</Link></li>
              <li><Link to="/changeText">ПУСТО</Link></li>
              <li><Link to="/changeText">ПУСТО</Link></li>
              <li><Link to="/changeText">ПУСТО</Link></li>
              <li><Link to="/changeText">ПУСТО</Link></li>
            </ul>
      );
    }
  }
  
  export default NavBar;