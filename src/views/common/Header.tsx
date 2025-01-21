import { Navbar } from "../../components/navbar/navbar"
import { HomeButton } from "../../components/navbar/home/homeButton"
import { SearchBar } from "../../components/navbar/searchbar/searchbar";
import { CartButton } from "../../components/navbar/cartbutton/cartButton";


import { CONNEXIONLINKS } from "../../components/navbar/common/constants"

import '../../components/style/_navbarmain.css'


export function Header(){

    return <header className='navbar-main'>
        <div className='nav-left'>
            <HomeButton />
        </div>
        <div className='nav-fill'>
            <SearchBar />
        </div>
        <div className='nav-right'>
            <Navbar links={CONNEXIONLINKS}/>
            <CartButton />
        </div>
    </header>
}