import React from 'react'
import {Link} from "react-router-dom";


export default function Navbar() {
    return (
        <div>
           <Link to='/'><h1>Jammin OUT</h1></Link> 
            <Link to='/all-albums'>Albums</Link>
            <Link to="/new-album">new</Link>
        </div>
    )
    
}
