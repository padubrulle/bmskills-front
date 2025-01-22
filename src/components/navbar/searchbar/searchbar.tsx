import { Input } from "../../common/Input"
import { SearchInput } from "./searchInput"
import { SearchValidation } from "./searchValidation"

import '../../style/_searchbar.css'

export function SearchBar(){
    return <form className="search-form">
        <SearchInput />
        <SearchValidation />
    </form>
}