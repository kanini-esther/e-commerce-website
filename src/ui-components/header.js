import React from 'react'
import { Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom'

function Header() {
    return(
    <header>
        <Link to="/home"><h2>GK</h2></Link>
        
        <nav>
            <ul  className="nav-links">
            
               <Link to="/veges"><li>Vegetables</li></Link> 
                 <Link to="/fruits"><li>Fruits</li></Link>
                <li>Cerials</li>
            </ul>
        </nav>
        <Link to="/"> <button>Logout</button></Link>
       
    </header>
    )
}

export default Header;