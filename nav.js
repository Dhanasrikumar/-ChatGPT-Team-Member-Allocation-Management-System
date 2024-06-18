import {Link} from "react-router-dom";
const Nav =()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-items">
                    <Link className="nav-link" to="/">Home</Link>

                </li>

                <li className="nav-items">
                <Link className="nav-link" to="/GroupedTeamsMembers">Teams</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Nav