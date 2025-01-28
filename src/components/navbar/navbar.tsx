import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

import { INavLinks } from "../../interfaces/INavLinks";

import '../style/_navbar.css'

interface NavbarProps{
    links:INavLinks[];
}

export function Navbar({links}:NavbarProps): ReactElement{
    const menuLinks = []
    for(let link of links){
        menuLinks.push(<NavLink to={link.url} key={link.name}>{link.name}</NavLink>)
    }

    return <div className="menu-links">
        {menuLinks}
    </div>
}