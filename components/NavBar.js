import React from 'react';
import Dragon from "./Dragon";
import { Link } from "react-router-dom";


const NavBar = () => (
  
  <nav className="navigationLink">
  <ul>
    <div className="floatLeft">
    <li>
      <Link to="/">
      <button>  
        Home
      </button>
      </Link>
    </li>
    <li>
      <Link to="/about/">
      <button>  
        About
      </button>
      </Link>
    </li>
    <li>
      <Link to="/contact/">
      <button>
        Contact
      </button>
      </Link>
    </li>
    </div>
    <div className="floatRight">
    <Dragon className="dragon, clearfix"/>
    </div>
  </ul>
  
</nav>
)
  
  export default NavBar;