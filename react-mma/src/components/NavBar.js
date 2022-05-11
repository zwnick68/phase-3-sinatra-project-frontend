import {React} from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav>
                <NavLink className="nav-link" to='/'>
                    Home
                </NavLink>
                <NavLink className="nav-link" to='/Managers'>
                    Managers
                </NavLink>
                <NavLink className="nav-link" to='/Promotions'>
                    Promotions
                </NavLink>
            </nav>
        </div>
    )
}

export default NavBar