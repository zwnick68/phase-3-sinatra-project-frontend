import {React} from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div >
            <nav className='nav-bar-div'>
                <NavLink className="nav-link" to='/fighters'>
                    Home
                </NavLink>
                <NavLink className="nav-link" to='/managers'>
                    Managers
                </NavLink>
                <NavLink className="nav-link" to='/promotions'>
                    Promotions
                </NavLink>
            </nav>
        </div>
    )
}

export default NavBar