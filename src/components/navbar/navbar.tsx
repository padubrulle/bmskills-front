import { NavLink } from "react-router-dom";
import '../style/_navbar.css'

export function Navbar({links}): ReactElement{
    const menuLinks = []
    for(let link of links){
        menuLinks.push(<NavLink to={link.url} key={link.name}>{link.name}</NavLink>)
    }

    return <div className="menu-links">
        {menuLinks}
    </div>
}