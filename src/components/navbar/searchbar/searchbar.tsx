import { FormEvent, useState } from "react";

import { SearchInput } from "./searchInput"
import { SearchValidation } from "./searchValidation"

import '../../style/_searchbar.css'
import { useNavigate } from "react-router-dom";

export function SearchBar(){
    const navigate = useNavigate();
    const[search, setSearch] = useState('');

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        
        fetch('http://localhost:5000/skill/' + search)
        .then(async (response) => {
            const resp = await response.json();
            navigate('/skill/' + resp['id']);
            //si clic sur une ligne alors on va directement sur la page du produit
            //si clic sur recherche afficher la liste des skills qui contiennent la recherche
        })
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        setSearch(event.target.value);
        //set un timer => après 1 sec afficher une petite liste (4 éléments) des skills qui contiennent la recherche
    }

    return <form className="search-form" onSubmit={handleSubmit}>
        <SearchInput onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}/>
        <SearchValidation />
    </form>
}