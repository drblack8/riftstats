import React from 'react'
import { MenuItems } from './MenuItems'

const Navbar = () => {
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
                <div className="menu-icon"></div>
                <ul>
                    {MenuItems.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <a href={item.cName} href={item.url} >
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar
