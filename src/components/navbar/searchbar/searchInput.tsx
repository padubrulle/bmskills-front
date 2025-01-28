import { ChangeEventHandler } from "react"

interface SearchInputProps{
    onChange: ChangeEventHandler<HTMLInputElement>;
}

/**
 * @param {ChangeEventHandler<HTMLInputElement>} onChange
 * @returns 
 */
export function SearchInput({onChange}:SearchInputProps){

    return <div className="form-group w-75">
        <input type='text' 
        placeholder='Rechercher...' 
        key='searchInput' 
        className="form-control" 
        onChange={onChange} />
    </div>
}