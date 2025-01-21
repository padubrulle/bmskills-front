import { Input } from "../../common/Input";

export function SearchInput(){

    return <div className="form-group w-75">
        <Input type='text' placeholder='Rechercher...' key='searchInput' className="form-control"></Input>
    </div>
}