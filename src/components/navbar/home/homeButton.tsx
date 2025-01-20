import { NavLink } from "react-router-dom";

import '../../style/_homeButton.css'

export function HomeButton(){
    return <div className='nav-left'>
        <NavLink to='/' className={'bi bi-house-door fa-lg'} key='home'></NavLink>
    </div>
}