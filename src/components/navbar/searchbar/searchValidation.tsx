import { Button } from "../../common/Button";

import '../../style/_searchbutton.css'

export function SearchValidation(){
    return <div className="form-group">
        <Button type='submit' className='bi bi-search form-control' />
    </div>
}