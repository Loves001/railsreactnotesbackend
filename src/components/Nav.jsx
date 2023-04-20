import React from "react"
import {Link} from "react-router-dom"

const Nav = (props) => {
    return <header>
        <h1>Love Gupta Note Taking App</h1>
        <nav>
<Link to= "/"><div>Home</div></Link>
<Link to= "/auth/signup"><div>Sign up</div></Link>
<Link to= "/auth/login"><div>Log in</div></Link>
        </nav>
    </header>
}

export default Nav