import {NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const Nav = ( ) => {
    return (  <nav className={s.nav}>
    <div className={s.item}>
        <NavLink to="/profile"  style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'white' })}>
                            Profile
        </NavLink>
        {/* <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink> */}
    </div>
    <div className={s.item}>
        <NavLink to="/dialogs" style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'white' })}>
                            Massages
        </NavLink>
        {/* <NavLink to="/dialogs" activeClassName={s.active}>Massages</NavLink> */}
    </div>
    <div className={s.item}>
        <NavLink to="/news" style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'white' })}>
                            News
        </NavLink>
        {/* <NavLink to="/news" activeClassName={s.active}>News</NavLink> */}
    </div>
    <div className={s.item}>
        <NavLink to="/music" style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'white' })}>
                            Music
        </NavLink>
        {/* <NavLink to="/music" activeClassName={s.active}>Music</NavLink> */}
    </div>
    <div className={s.item}>
        <NavLink to="/settings" style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'white' })}>
                            Settings
        </NavLink>
        {/* <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink> */}
    </div>
    <div className={s.item}>
        <NavLink to="/fetch" style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'white' })}>
                            Fetch
        </NavLink>
        {/* <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink> */}
    </div>
  </nav>)
}

export default Nav;