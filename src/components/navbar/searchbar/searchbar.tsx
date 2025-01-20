import { SearchInput } from "./searchInput"
import { SearchValidation } from "./searchValidation"


export function SearchBar(){


    return <form>
        <SearchInput></SearchInput>
        <SearchValidation></SearchValidation>
    </form>
}