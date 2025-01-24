import { Input } from "../../common/Input";

export function SearchInput({onChange}){

    return <div className="form-group w-75">
        <input type='text' 
        placeholder='Rechercher...' 
        key='searchInput' 
        className="form-control" 
        onChange={onChange} />
    </div>
}