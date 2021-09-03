import React from "react";
import {BsBookmarkCheck} from 'react-icons/bs'

const Nav =()=>{


    return(
        <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1" href='/' style={{marginLeft:'4%'}}><BsBookmarkCheck/> MyBooker</span>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/info" style={{ marginRight:'2%'}}>Coaches</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav